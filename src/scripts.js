//~~~ Imports ~~~//
import * as dayjs from 'dayjs'
var isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween)

import './images/logo.png'
import './images/background.png'
import './css/base.scss';

import domUpdates from './dom-updates.js';
import apiCalls from './apiCalls.js';
import Traveler from './Traveler.js';
import Trip from './Trip.js';


//~~~ Global Variables ~~~//
let currentDate = dayjs().format('dddd, MMM D, YYYY');
let currentTraveler;
let allDestinations, allTrips;

//~~~ Query Selectors ~~~//
//Login Page 
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginBtn');
//Nav Bar
const allTripsBtn = document.getElementById('allTripsBtn');
const currentTripsBtn = document.getElementById('currentTripsBtn');
const upcomingTripsBtn = document.getElementById('upcomingTripsBtn');
const previousTripsBtn = document.getElementById('previousTripsBtn');
const pendingTripsBtn = document.getElementById('pendingTripsBtn');
//Booking Section
const destinationInput = document.getElementById('destinationMenu');
const startDateInput = document.getElementById('startDateMenu');
const durationInput = document.getElementById('durationInput');
const travelersInput = document.getElementById('travelersInput');
const costButton = document.getElementById('costBtn');
const bookButton = document.getElementById('bookBtn');
const cardGrid = document.getElementById('cardGrid');
const bookingForm = document.getElementById('bookingForm');

//~~~ Event Listeners ~~~//
window.addEventListener('load', retrieveAllData);
loginButton.addEventListener('click', checkLogin);
loginButton.addEventListener('click', checkLogin);
currentTripsBtn.addEventListener('click', showCurrentTripsPage)
upcomingTripsBtn.addEventListener('click', showUpcomingTripsPage)
previousTripsBtn.addEventListener('click', showPastTripsPage)
pendingTripsBtn.addEventListener('click', showPendingTripsPage)
allTripsBtn.addEventListener('click', showAllTrips)
costButton.addEventListener('click', estimateTripCost);
bookButton.addEventListener('click', bookNewTrip);

//~~~ Functions ~~~//
function retrieveAllData() {
  apiCalls.getAllData()
    .then(data => {
      allTrips = data[1];
      allDestinations = data[2];

    })
}

function retrieveSingleTraveler(userID) {
  apiCalls.getSingleTravelerData(userID)
    .then(data => {
      currentTraveler = new Traveler(data[0])
      createTraveler(currentTraveler);
      displayUserInfo(currentTraveler);
    })
}

function checkUsernameInput(numbers) {
  if ((numbers === undefined) ||
    (numbers === '0') ||
    (numbers === '00') ||
    (parseInt(numbers) > 50)) {
    return false
  } else {
    return true
  }
}

function checkPasswordInput(passwordValue) {
  if (passwordValue !== 'travel2020') {
    return false
  } else {
    return true
  }
}

function checkLogin(event) {
  const usernameValue = usernameInput.value.trim()
  const passwordValue = passwordInput.value.trim()
  const splitName = usernameValue.split('')
  const numbers = splitName.slice(8, 10).join('')
  const userIDInput = parseInt(numbers)

  let usernameResult = checkUsernameInput(numbers);
  let passwordResult = checkPasswordInput(passwordValue);

  event.preventDefault();
  if (usernameResult === false && passwordResult === false) {
    domUpdates.buildLoginErrorMessage('both')
  } else if (usernameResult === false && passwordResult === true) {
    domUpdates.buildLoginErrorMessage('username')
  } else if (usernameResult === true && passwordResult === false) {
    domUpdates.buildLoginErrorMessage('password')
  } else if (usernameResult === true && passwordResult === true) {
    retrieveSingleTraveler(userIDInput)
  }
}

function createTraveler() {
  currentTraveler.getAllTrips(allTrips);
  currentTraveler.getCurrentTrips(currentDate)
  currentTraveler.getUpcomingTrips(currentDate)
  currentTraveler.getPastTrips(currentDate)
  currentTraveler.getPendingTrips()
}

function displayUserInfo(traveler) {
  domUpdates.changePageView(currentDate);
  domUpdates.welcomeUserName(traveler);
  domUpdates.makeDestinationSelections(allDestinations);
  domUpdates.displayAnnualCosts(traveler.calcAnnualSpending(currentDate, allDestinations));
  domUpdates.displayTrips(currentTraveler.allTrips, cardGrid, "My Trips", allDestinations)
}

function showCurrentTripsPage() {
  domUpdates.displayTrips(currentTraveler.present, cardGrid, "My Current Trips", allDestinations)
}

function showUpcomingTripsPage() {
  domUpdates.displayTrips(currentTraveler.upcoming, cardGrid, "My Upcoming Trips", allDestinations)
}

function showPastTripsPage() {
  domUpdates.displayTrips(currentTraveler.past, cardGrid, "My Past Trips", allDestinations)
}

function showPendingTripsPage() {
  domUpdates.displayTrips(currentTraveler.pending, cardGrid, "My Pending Trips", allDestinations)
}

function showAllTrips() {
  domUpdates.displayTrips(currentTraveler.allTrips, cardGrid, "My Trips", allDestinations)
}

//~~~ POST NEW TRIP ~~~//
function testTripInputs(newTripData) {
  if (newTripData.date === '' || !newTripData.duration || !newTripData.travelers || newTripData.destinationID <= 0 || dayjs(newTripData.date).isBefore(currentDate)) {
    return false;
  }
  return true
}

function makePostTripObject() {
  let startDate = dayjs(startDateInput.value).format('YYYY/MM/DD');
  let numDays = parseInt(durationInput.value);
  let numTravelers = parseInt(travelersInput.value);
  let destID = parseInt(destinationInput.value);

  let newTripObject = {
    "id": allTrips.length + 1,
    "userID": currentTraveler.id,
    "destinationID": destID,
    "travelers": numTravelers,
    "date": startDate,
    "duration": numDays,
    "status": "pending",
    "suggestedActivities": []
  };
  return newTripObject;
}

function estimateTripCost() {
  let newTripData = makePostTripObject();
  let newTripInstance = new Trip(newTripData);
  let inputTest = testTripInputs(newTripData);
  if (!inputTest) {
    domUpdates.buildErrorMessage();
  } else {
    newTripInstance.getDestinationInfo(allDestinations)
    newTripInstance.estimateTotalTripCost();
    let costString = newTripInstance.cost.toFixed(2).toString();
    domUpdates.buildCostMessage(costString)
  }
}

function bookNewTrip() {
  let newTripData = makePostTripObject();
  let newTripInstance = new Trip(newTripData);
  let inputTest = testTripInputs(newTripData);

  if (!inputTest) {
    domUpdates.buildErrorMessage();
  } else {
    apiCalls.postNewTrip(newTripData)
    currentTraveler.allTrips.push(newTripInstance)
    currentTraveler.pending.push(newTripInstance)
    currentTraveler.upcoming.push(newTripInstance)
    newTripInstance.getDestinationInfo(allDestinations)
    newTripInstance.estimateTotalTripCost();
    domUpdates.buildBookingMessage(newTripInstance)
    domUpdates.displayTrips(currentTraveler.allTrips, cardGrid, "My Trips", allDestinations)
    bookingForm.reset();
    retrieveAllData()
  }
}
