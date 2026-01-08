import Flight from "./models/flight.js";
import RegularTicket from "./models/ticket/regularTicket.js";
import VipTicket from "./models/ticket/vipTicket.js";
import RegularPassenger from "./models/passenger/regularPassenger.js";
import StudentPassenger from "./models/passenger/studentPassenger.js";
import Airport from "./models/airport.js";

const flightsData = [
  {
    flightName: "ua-11",
    airline: "united",
    flightNumber: 1,
    maxNumberOfPassegers: 10,
    regularTicketPrice: 10,
    vipTicketPrice: 10,
  },
  {
    flightName: "ua-12",
    airline: "el al",
    flightNumber: 2,
    maxNumberOfPassegers: 11,
    regularTicketPrice: 31,
    vipTicketPrice: 61,
  },
  {
    flightName: "ua-13",
    airline: "united",
    flightNumber: 3,
    maxNumberOfPassegers: 12,
    regularTicketPrice: 32,
    vipTicketPrice: 62,
  },
];


function main(){

    const airport = new Airport(flightsData);
    const regularPassenger = new RegularPassenger("moshe", 1, 100, "efg", false);
    const studentPassenger = new StudentPassenger("david", 1, 30, 'abcd', false);

    const ticket1 = airport.buyTicket("ua-12", "VIP", regularPassenger);
    const ticket2 = airport.buyTicket("ua-11", "REGULAR", studentPassenger);

}


main();
