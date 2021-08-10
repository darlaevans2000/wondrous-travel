// import
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
import destinationData from '../test/test-data/destination-data'


// global var
let currentDate = '2021-01-15';
let currentTraveler;
let allDestinations, allTravelers, allTrips;


// qs
let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');
let loginError = document.getElementById('loginError');
const loginButton = document.getElementById('loginBtn');

const allTripsBtn = document.getElementById('allTripsBtn');
const currentTripsBtn = document.getElementById('currentTripsBtn');
const upcomingTripsBtn = document.getElementById('upcomingTripsBtn');
const previousTripsBtn = document.getElementById('previousTripsBtn');
const pendingTripsBtn = document.getElementById('pendingTripsBtn');
// booking

const destinationInput = document.getElementById('destinationMenu');
const startDateSelect = document.getElementById('startDateMenu');
const durationInput = document.getElementById('durationInput');
const travelersInput = document.getElementById('travelersInput');
const costButton = document.getElementById('costBtn');
const bookButton = document.getElementById('bookBtn');
const cardGrid = document.getElementById('cardGrid');
const bookingForm = document.getElementById('bookingForm');
// event listeners
window.addEventListener('load', retrieveAllData);

loginButton.addEventListener('click', checkLogin);
currentTripsBtn.addEventListener('click', showCurrentTripsPage)
upcomingTripsBtn.addEventListener('click', showUpcomingTripsPage)
previousTripsBtn.addEventListener('click', showPastTripsPage)
pendingTripsBtn.addEventListener('click', showPendingTripsPage)
allTripsBtn.addEventListener('click', showAllTrips)
costButton.addEventListener('click', estimateTripCost);
bookButton.addEventListener('click', bookNewTrip);

function retrieveAllData() {
  apiCalls.getAllData()
    .then(data => {
      allTravelers = data[0];
      console.log(allTravelers)
      allTrips = data[1];
      console.log(allTrips)
      allDestinations = data[2];
      console.log(allDestinations)
      let singleTraveler = new Traveler(data[3])
      console.log(singleTraveler)
    })
}

function getRandomDate() {
    let start = new Date(2020, 0, 1)
    let end = new Date(2022, 8, 6)
    let newDate =  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return dayjs(newDate).format('YYYY-MM-DD')
}

function checkLogin(event) {
  event.preventDefault();
  if (passwordInput.value !== 'travel2020' || !passwordInput.value || !usernameInput.value || usernameInput.length < 9) {
    loginError.classList.remove('hidden');
  } else {
    let userParam = evaluateInput(usernameInput.value)
    createTraveler(userParam);
    console.log(currentTraveler)
    displayUserInfo(currentTraveler);
  }
}

function createTraveler(user) {
   currentTraveler = new Traveler(user)
   currentTraveler.getAllTrips(allTrips);
   currentTraveler.getCurrentTrips(currentDate)
   currentTraveler.getUpcomingTrips(currentDate)
   currentTraveler.getPastTrips(currentDate)
   currentTraveler.getPendingTrips()
}

function evaluateInput(username) {
  let splitInput = username.split('');
  let joinedNum = parseInt(splitInput[8] + splitInput[9]);

  let user = allTravelers.find(traveler => {
    return traveler.id === joinedNum;
  });

  return user;
}

function displayUserInfo(traveler) {
    domUpdates.changePageView(currentDate);
    domUpdates.welcomeUserName(traveler);
    domUpdates.makeDestinationSelections(allDestinations);
    domUpdates.displayAnnualCosts(traveler.calcAnnualSpending(currentDate, allDestinations));
    domUpdates.displayTrips(currentTraveler.allTrips, cardGrid, "My Trips", allDestinations)
}

function showCurrentTripsPage() {
    // this does not return the trip if the 'start date' is the current date! FIX!!!
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

//post new trip 

function testTripInputs(newTripData) {
  if (newTripData.date === '' || !newTripData.duration || !newTripData.travelers || newTripData.destinationID <= 0 || dayjs(newTripData.date).isBefore(currentDate)) {
    return false;
  }
  return true
}

function makePostTripObject() {
  let startDate = dayjs(startDateSelect.value).format('YYYY/MM/DD');
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
console.log(newTripObject)
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
    let costString = newTripInstance.cost.toFixed(1).toString();
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
        apiCalls.getAllData()
        retrieveAllData()
        // console.log(currentTraveler.allTrips)
        // domUpdates.displayAnnualCosts(currentTraveler.annualCost);
        // console.log(currentTraveler.annualCost)
  }
}