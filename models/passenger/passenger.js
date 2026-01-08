class Passenger{
    
    #amountOfMoney
    #idNumber

    constructor(name, idNumber, amountOfMoney){
        this.name = name;
        this.#idNumber = idNumber;
        this.#amountOfMoney = amountOfMoney;
    }
    
    discount(ticketType){
        return 0;
    }
 
    buyTicket(ticketType, ticketPrice){
        
        const discout = this.discount(ticketType) * ticketPrice;
        const price = ticketPrice - discout
        
        if(this.#amountOfMoney - price >= 0){
            this.#amountOfMoney -= price;
            return true;
        }

        return false;
    }

    getMoneyLeft(){
        return this.#amountOfMoney;
    }

    getIdNumber(){
        return this.#idNumber;
    }
}

export default Passenger;