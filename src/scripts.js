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
let currentDate = getRandomDate();
let currentTraveler;
let allDestinations, allTravelers, allTrips;

// qs
let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');
let loginError = document.getElementById('loginError');
const loginButton = document.getElementById('loginBtn');

// event listeners
window.addEventListener('load', retrieveAllData);

loginButton.addEventListener('click', checkLogin);


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
    domUpdates.changePageView();
    domUpdates.welcomeUser(traveler);
}