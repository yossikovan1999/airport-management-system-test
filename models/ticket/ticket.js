class Ticket{

    constructor(ticketNumber, price, ownerName=null){
        this.ticketNumber = ticketNumber;
        this.price = price;
        this.ownerName = ownerName;
    }

}

export default Ticket;