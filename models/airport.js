import Flight from "./flight.js";

class Airport{

    constructor(flightsData){
        this.flights = this.createFlights(flightsData)

    }
    
    createFlights(flightData){
        
        const flights = []

        for(let i = 0; i < flightData.length; i++){
            const flight = new Flight(...Object.values(flightData[i])); 
            flights.push(flight);
        }

        return flights;
    }

    buyTicket(flightName, ticketType, passenger){

        const flight = this.flights.find((flight)=>flight.flightName === flightName);
        
        if(!flight){
            return false;
        }

        return flight.buyTicket(ticketType, passenger);
    }
 
}

export default Airport;