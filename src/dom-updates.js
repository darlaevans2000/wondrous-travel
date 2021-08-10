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
    currentDate.innerHTML += `${date}`;
  },

  welcomeUserName(user) {
    const welcomeName = document.getElementById('currUserName');
    const firstName = user.returnFirstName();
    welcomeName.innerText = `${firstName}!`;
  },

  makeDestinationSelections(allDestinations) {
    let destinationInput = document.getElementById("destinationMenu");

    allDestinations.sort((a, b) => a.destination.localeCompare(b.destination))

    allDestinations.forEach(destination => {
      destinationInput.innerHTML += `<option value="${destination.id}">${destination.destination}</option>`;
    })
  },

  displayAnnualCosts(totalCost) {
    const totalDisplay = document.getElementById('totalAmount');
    totalDisplay.innerText = `$${totalCost}`;
  },

 displayTrips(trips, tripCardsSection, bannerMessage, allDestinations) {
    this.displayTripCardsBanner(trips, tripCardsSection, bannerMessage, allDestinations)
  },

  displayTripCardsBanner(trips, tripCardsSection, bannerMessage, allDestinations) {
    let banner = document.getElementById('gridTitle');
    if (trips.length === 0) {
      tripCardsSection.innerHTML = ``
      banner.innerHTML =
      `<h2>No Trips to See Here! Book a Trip above to start planning your next adventure.</h2>`
    } else {
      banner.innerHTML =
      `<h2>${bannerMessage}</h2>`
      this.displayTripCards(trips, tripCardsSection, allDestinations)
    }
  },

  displayTripCards(trips, tripCardsSection, allDestinations) {
    tripCardsSection.innerHTML = ``
    let sortedTrips = trips.sort((a, b) => (dayjs(b.date).isAfter(dayjs(a.date)) ? 1 : -1))

    sortedTrips.forEach(trip => {
        trip.getPrettyFormatDates();
        trip.getDestinationInfo(allDestinations);
        tripCardsSection.innerHTML += 
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
      })
  },

    buildBookingMessage(newTrip) {
    const bookingMessage = document.getElementById('bookingMessage'); 
    let place = newTrip.destination;
    let costString = newTrip.cost.toFixed(2).toString();

    bookingMessage.innerHTML = `Congratulations, you've booked a trip to ${place.destination} for $${costString}!`;
  },

    buildCostMessage(cost) {
    const bookingMessage = document.getElementById('bookingMessage'); 

    bookingMessage.innerHTML = `The total cost of this trip would be $${cost}`;
  },

  buildErrorMessage() {
    const bookingMessage = document.getElementById('bookingMessage'); 

    bookingMessage.innerHTML = `Please provide all required booking information and a date after current date.`;
  },

}

export default domUpdates;