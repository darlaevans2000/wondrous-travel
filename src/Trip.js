class Trip {
    constructor(tripsData, destinationData){
        this.id = tripsData.id;
        this.userID = tripsData.userID;
        this.destinationID = tripsData.destinationID;
        this.travelers = tripsData.travelers;
        this.date = tripsData.date;
        this.duration = tripsData.duration;
        this.status = tripsData.status;
        this.suggestedActivities = tripsData.suggestedActivities;
        this.destination = destinationData;
    }

    estimateTotalTripCost() {
    let total = 0;
    total += this.destination.estimatedLodgingCostPerDay * this.duration
    total += this.destination.estimatedFlightCostPerPerson * this.travelers
    total += total * .10
    return parseFloat(total.toFixed(2))
    }

    // retrieveTripDates(){

    // }

}

export default Trip;