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

    getSingleTraveler(userID) {
    return fetch(`http://localhost:3001/api/v1/travelers/${userID}`)
      .then(response => 
        response.json()
      )
      .then(singleTravelerData => {
          return singleTravelerData
    })
  },

  getAllData(userID) {
    let promises = [ apiCalls.getAllTravelers(), apiCalls.getAllTrips(), apiCalls.getAllDestinations(),  apiCalls.getSingleTraveler(userID)];
    return Promise.all(promises)
      .then(values => {
        return values;
      })
      .catch(error => console.log(`${error}: Error retrieving all data`));
  }
}

export default apiCalls;
