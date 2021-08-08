import Trip from '../src/Trip';
import * as dayjs from 'dayjs'
import destinationData from '../test/test-data/destination-data';
var isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween)

class Traveler {
  constructor(traveler) {
    this.id = traveler.id
    this.name = traveler.name
    this.type = traveler.travelerType;
    this.allTrips = [];
    this.annualCost = 0;
    this.past = [];
    this.present = [];
    this.upcoming = [];
    this.pending = [];
  }

  returnFirstName() {
    return this.name.split(' ')[0]
  }

   getAllTrips(allTrips) {
    allTrips.forEach(trip => {
      if (trip.userID === this.id) {
        this.allTrips.push(new Trip(trip));
      }
    });
    this.allTrips.forEach(trip => trip.getDates());
  }

  getCurrentTrips(currentDate) {
    return this.allTrips.filter(trip => {
      if(dayjs(currentDate).isBetween(trip.startDate, trip.endDate)) {
        return this.present.push(trip);
      }
    });
  }

  getUpcomingTrips(currentDate) {
    return this.allTrips.filter(trip => {
      if(dayjs(currentDate).isBefore(trip.startDate) === true) {
        return this.upcoming.push(trip)
      }
    })
  }

  getPastTrips(currentDate) {
    return this.allTrips.filter(trip => {
      if(dayjs(trip.startDate).isBefore(currentDate) === true && dayjs(trip.endDate).isBefore(currentDate)) {
        return this.past.push(trip)
      }
    })
  }

  getPendingTrips() {
    return this.allTrips.filter(trip => {
      if(trip.status === 'pending') {
        return this.pending.push(trip)
      }
    })
  }

  calcAnnualSpending(currentDate) {
    let currentYear = dayjs(currentDate).year();
    this.allTrips.reduce((total, trip) => {
      let tripYear = dayjs(trip.startDate).year();
      if (tripYear === currentYear) {
        trip.getDestinationInfo(destinationData)
        trip.estimateTotalTripCost();
        total += trip.cost;
        return this.annualCost = total;
      }
    }, 0);
  }
}

export default Traveler;
