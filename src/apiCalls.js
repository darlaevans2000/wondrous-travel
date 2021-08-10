const apiCalls = {

  getAllTravelers() {
    return fetch('http://localhost:3001/api/v1/travelers')
      .then(response => 
        response.json()
      )
      .then(allTravelers => {
        return allTravelers.travelers
      })
  },

  getAllTrips() {
    return fetch('http://localhost:3001/api/v1/trips')
      .then(response => 
        response.json()
      )
      .then(allTrips => {
        return allTrips.trips
      })
  },

  getAllDestinations() {
    return fetch('http://localhost:3001/api/v1/destinations')
      .then(response => 
        response.json()
      )
      .then(allDestinations => {
        return allDestinations.destinations
      })
  },

    getSingleTraveler() {
    return fetch(`http://localhost:3001/api/v1/travelers/1`)
      .then(response => 
        response.json()
      )
      .then(singleTravelerData => {
          return singleTravelerData
    })
  },

    postNewTrip(tripData) {
    return fetch('http://localhost:3001/api/v1/trips', {
      method: 'POST',
      body: JSON.stringify(tripData), 
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Sorry, we could not process your booking request.`);
        }
          return response.json()
      })
      .then(this.getAllData())
         .catch(err => console.log(err))
  },

  getAllData() {
    return Promise.all([this.getAllTravelers(), this.getAllTrips(), this.getAllDestinations(), this.getSingleTraveler()])
      .then(data => data)
      .catch(err => console.log(err))
  }
}

export default apiCalls;
