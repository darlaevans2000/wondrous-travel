// imports
import * as dayjs from 'dayjs'
var isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween)
import './images/logo.png'
import './images/background.png'
import './css/base.scss';

import apiCalls from './apiCalls.js';

import Traveler from './Traveler.js';
import Trip from './Trip.js';

// global variables

let currentDate = getRandomDate();


let allDestinations, allTravelers, allTrips;



window.addEventListener('load', retrieveAllData);


function retrieveAllData() {
  apiCalls.getAllData()
    .then(allData => {
      allTravelers = allData[0];
      console.log(allTravelers)
      allTrips = allData[1];
      console.log(allTrips)
      allDestinations = allData[2];
      console.log(allDestinations)
      console.log(currentDate)
    })
}

function getRandomDate() {
    let start = new Date(2020, 0, 1)
    let end = new Date(2022, 8, 6)
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}