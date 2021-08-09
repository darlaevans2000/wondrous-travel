import * as dayjs from 'dayjs'
var isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween)
import './images/logo.png'
import './images/background.png'
import './css/base.scss';

import apiCalls from './apiCalls.js';
import Traveler from './Traveler.js';
import Trip from './Trip.js';

// let currentDate = '2020-02-12';

let domUpdates = {
changePageView(date) {
    const loginPage = document.getElementById('loginPage');
    const userPage = document.getElementById('userPage');
    const currentDate = document.getElementById('currentDate');
    loginPage.classList.add('hidden');
    userPage.classList.remove('hidden');
    currentDate.innerHTML += `Todays Date: ${date}`;
  },

  welcomeUserName(user) {
    const welcomeName = document.getElementById('currUserName');
    const firstName = user.returnFirstName();
    welcomeName.innerText = `${firstName}!`;
  },

  makeDestinationSelections(allDestinations) {
    let menu = document.getElementById("destinationMenu");

   allDestinations.sort((a, b) => a.destination.localeCompare(b.destination))

    allDestinations.forEach(destination => {
      menu.innerHTML += `<option value="${destination.id}">${destination.destination}</option>`;
    })
  },

  displayAnnualCosts(totalCost) {
    const totalDisplay = document.getElementById('totalAmount');
    totalDisplay.innerText = `$${totalCost}`;
  },

  displayAllTripCards(userTrips, allDestinations) {
    let cardGrid = document.getElementById('cardGrid');
    cardGrid.innerHTML = '';

    const sortedTrips = userTrips.sort((a, b) => {
       return dayjs(b.startDate).year() - dayjs(a.startDate).year()
    });

    if (userTrips.length > 0) {
      sortedTrips.forEach(trip => {
        trip.getDestinationInfo(allDestinations);
        trip.getPrettyFormatDates();
        let tripCard = 
          `<article class="card">
            <section class="card-top" aria-label="[photograph of ${trip.destination.destination}]" style="background-image: url(${trip.destination.image})">
            </section>
            <section class="card-bottom">
            <h2 id="destination">${trip.destination.destination}</h2>
              <div class="trip-info">
                <h3>Start Date:</h3>
                <h2 id="startDate">${trip.startDate}</h2>
              </div>
              <div class="trip-info">
                <h3>Duration:</h3>
                <h2 id="duration">${trip.duration} days</h2>
              </div>
              <div class="trip-info">
                <h3>Travelers:</h3>
                <h2 id="travelers">${trip.travelers}</h2>
              </div>
              <div class="trip-info">
                <h3>Trip Status:</h3>
                <h2 id="tripStatus">${trip.status}</h2>
              </div>
            </section>
          </article>`;
        cardGrid.innerHTML += `${tripCard}`;
      });
    } else {
      cardGrid.innerHTML = `<article class="no-results">You have no trips booked yet.</article>`;
    }
  },

}

export default domUpdates;