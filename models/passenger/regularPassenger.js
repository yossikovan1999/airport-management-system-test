import Passenger from "./passenger.js";

class RegularPassenger extends Passenger{

    constructor(name, idNumber, amountOfMoney, Workplace, friend=false){
        super(name, idNumber, amountOfMoney);
        this.Workplace = Workplace;
        this.friend = friend;
    }
    
    discount(ticketType){
        
        if(ticketType === "REGULAR" && this.friend === true){
            return 0.2
        }

        if(ticketType == "VIP" && this.friend === true){
            return 0.15
        }

        return 0;
    }
}

          

export default RegularPassenger;