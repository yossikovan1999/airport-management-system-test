import { test, describe } from "node:test";
import assert from "assert";
import Airport from "../models/airport.js";
import RegularPassenger from "../models/passenger/regularPassenger.js";
import VipTicket from "../models/ticket/vipTicket.js";
import RegularTicket from "../models/ticket/regularTicket.js";

const flightsData = [
  {
    flightName: "ua-11",
    airline: "united",
    flightNumber: 1,
    maxNumberOfPassegers: 10,
    regularTicketPrice: 10,
    vipTicketPrice: 15,
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

describe("Testing prices", () => {
  test("not enough money.", () => {
    const airport = new Airport(flightsData);
    const passenger = new RegularPassenger("moshe", 1, 20, "hermon", false);
    assert.equal(airport.buyTicket("ua-12", "VIP", passenger), false);
  });

  test("enough money correct name.", () => {
    const airport = new Airport(flightsData);
    const passenger = new RegularPassenger("moshe", 1, 20, "hermon", false);
    const name = "moshe";
    assert.equal(airport.buyTicket("ua-11", "VIP", passenger).ownerName, name);
  });


  test("money reduced correctly.", () => {
    const airport = new Airport(flightsData);
    const passenger = new RegularPassenger("moshe", 1, 20, "hermon", false);
    airport.buyTicket("ua-11", "REGULAR", passenger);
    const amount = 10
    assert.equal(passenger.getMoneyLeft(), 10);
  });

});
