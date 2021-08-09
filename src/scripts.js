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


// global var
let currentDate = '2021-01-16';
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

// event listeners
window.addEventListener('load', retrieveAllData);

loginButton.addEventListener('click', checkLogin);
currentTripsBtn.addEventListener('click', showCurrentTripsPage)
upcomingTripsBtn.addEventListener('click', showUpcomingTripsPage)
previousTripsBtn.addEventListener('click', showPastTripsPage)
pendingTripsBtn.addEventListener('click', showPendingTripsPage)
allTripsBtn.addEventListener('click', showAllTrips)

function retrieveAllData() {
  apiCalls.getAllData(1)
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
  if (passwordInput.value !== 'travel2020' || !passwordInput.value || !username || username.length < 9) {
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
    domUpdates.displayAllTripCards(traveler.allTrips, allDestinations)
}

function showCurrentTripsPage() {
    // this does not return the trip if the 'start date' is the current date! FIX!!!
    currentTraveler.getCurrentTrips(currentDate)
    domUpdates.displayNewTitle('Current Trips')
    domUpdates.displayAllTripCards(currentTraveler.present, allDestinations)
}

function showUpcomingTripsPage() {
    currentTraveler.getUpcomingTrips(currentDate)
    domUpdates.displayNewTitle('Upcoming Trips')
    domUpdates.displayAllTripCards(currentTraveler.upcoming, allDestinations)
}

function showPastTripsPage() {
    currentTraveler.getPastTrips(currentDate)
    domUpdates.displayNewTitle('Past Trips')
    domUpdates.displayAllTripCards(currentTraveler.past, allDestinations)
}

function showPendingTripsPage() {
    currentTraveler.getPendingTrips()
    domUpdates.displayNewTitle('Pending Trips')
    domUpdates.displayAllTripCards(currentTraveler.pending, allDestinations)
}

function showAllTrips() {
    domUpdates.displayNewTitle('My Trips')
    domUpdates.displayAllTripCards(currentTraveler.allTrips, allDestinations)
}