// IMPORTS
import * as dayjs from 'dayjs'
var isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween)
import './images/logo.png'
import './images/background.png'
import './css/base.scss';

import apiCalls from './apiCalls.js';
import Traveler from './Traveler.js';
import Trip from './Trip.js';

// GLOBAL VARIABLES

let currentDate = getRandomDate();
let user, currentTraveler;
let randomID = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
let allDestinations, allTravelers, allTrips;

window.addEventListener('load', retrieveAllData);


function retrieveAllData() {
  apiCalls.getAllData(randomID)
    .then(allData => {
      allTravelers = allData[0];
      allTrips = allData[1];
      allDestinations = allData[2];
      currentTraveler = new Traveler(allData[3]);
    })
}

function getRandomDate() {
    let start = new Date(2020, 0, 1)
    let end = new Date(2022, 8, 6)
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}
