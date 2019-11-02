//a METHOD - an Object property whose value is a function.
//Challenge - check availability in restaurant according to group size.
let restaurant = {
    name: 'Burger',
    guestCapacity: 75,
    getCount: 0,
    checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.getCount;        
        return partySize <= seatsLeft; 
    },
    seatParty: function (partySize) {
        this.getCount = this.getCount + partySize;
    }, 
    removeParty: function (partySize) {
        this.getCount = this.getCount - partySize;
    }
}

//we call the method property inside the object restaurant.
restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));//false
restaurant.removeParty(4);
console.log(restaurant.checkAvailability(3));//true