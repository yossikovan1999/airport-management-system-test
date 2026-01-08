import Passenger from "./passenger.js";

class StudentPassenger extends Passenger{

    constructor(name, idNumber, amountOfMoney, school){
        super(name, idNumber, amountOfMoney);
        this.school = school;
    }

    discount(ticketType){
        if(ticketType === 'REGULAR'){
            return 0.1;
        }

        return 0;
    }
}

export default StudentPassenger;

