console.log("Car is gassed, bro. (Script is loaded...)");

function Cab(color, available_seats) {
    this.color = color;
    this.available_seats = available_seats;
    this.passengers = [];
}

Cab.prototype.acceptPassenger = function(passenger) {
    console.log(" Get in " + passenger.name + "!")
    if (this.available_seats === 0)
    {
        console.log('Not!!! Sorry ' + passenger.name + '! Cab\'s full. Get another ride!');
    }
    else
    {
      this.passengers.push(passenger);
      this.available_seats--;
      if (this.available_seats === 1) 
      {
          console.log("  Only 1 seat left!");
      }
      else if (this.available_seats > 1)
      {
          console.log('  ' + this.available_seats + ' seats left.');
      }
    }
};

Cab.prototype.endRide = function() {
    for (var i=this.passengers.length-1;i>=0;i--) {
        console.log(" " + this.passengers[i].name + " steps out fresh.");
        this.passengers.pop();
        this.available_seats++;
    }
};

Cab.prototype.rollCall = function() {
    for (var i=0;i<=this.passengers.length;i++) {
        console.log(this.passengers[i].name + " is in my cab!");
    }
};

function Passenger(name) {
    this.name = name;
}

var uberX = new Cab ("black", 4);

var emily = new Passenger("Emily")
var rafa = new Passenger("Rafa");
var sarah = new Passenger("Sarah")
var lichard = new Passenger("Lichard");
var andrew = new Passenger("Andrew")


// Le Tail of Le Uber
console.log("Everbody get in!");
uberX.acceptPassenger(emily);
uberX.acceptPassenger(rafa);
uberX.acceptPassenger(sarah);
uberX.acceptPassenger(lichard);
uberX.acceptPassenger(andrew);
console.log("The uber driver has a story to tell...");
console.log("Car arrives! Time to hop out!");
uberX.endRide();
console.log("Seems...there's a request for the SAME pick up location...");
uberX.acceptPassenger(andrew);
console.log("The uber driver has a story to tell...");
console.log("Car arrives! Time to hop out!");
uberX.endRide();
