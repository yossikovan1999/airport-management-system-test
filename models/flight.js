import RegularTicket from "./ticket/regularTicket.js";
import VipTicket from "./ticket/vipTicket.js";
import {v4} from 'uuid';

class Flight {
  constructor(flightName, airline, flightNumber, maxNumberOfPassegers,
    regularTicketPrice, vipTicketPrice) {
    this.flightName = flightName;
    this.airline = airline;
    this.flightNumber = flightNumber;
    this.maxNumberOfPassegers = maxNumberOfPassegers;
    this.regularTicketPrice = regularTicketPrice;
    this.vipTicketPrice = vipTicketPrice;
    this.ticketList = this.initializeTickets();
  }

  initializeTickets() {
    
    const ticketList = [];
    
    const regular = this.maxNumberOfPassegers * 0.9;
    const vip = this.maxNumberOfPassegers * 0.1;

    //create regular tickets
    for (let i = 0; i < regular; i++) {
      const ticket = new RegularTicket(this.regularTicketPrice);
      ticketList.push(ticket);
    }

    //create vip tickets
    for (let i = 0; i < vip; i++) {
      const ticket = new VipTicket(this.vipTicketPrice, v4());
      ticketList.push(ticket);
    }

    return ticketList;
  }

  buyTicket(ticketType, passenger){
    
    const ticket = this.getTicketToBuy(ticketType);

    if(!ticket){
      return false;
    }
    
    //store the ticket price
    const ticketPrice = ticketType == "VIP" ? this.vipTicketPrice : this.regularTicketPrice;
    
    if(passenger.buyTicket(ticketType, ticketPrice)){
      ticket.ownerName = passenger.name;
      return ticket
    }
    
    //passenger did not manage to buy a ticket.
    return false;
  }

  getTicketToBuy(ticketType){
    
    let ticket;
    
    const ticketClass = ticketType === "REGULAR" ? RegularTicket : VipTicket;

    ticket = this.ticketList.find((ticket)=> (ticket instanceof ticketClass) && !ticket.ownerName)
  
    return ticket;
  }  
}

export default Flight;
