import Ticket from "./ticket.js";

class VipTicket extends Ticket{

     constructor(price, ticketNumber, ownerName=null){
        super(ticketNumber, price, ownerName)
        this.benifits = ["Free alcohol", "Free food", "Hot towels"];
    }
}

export default VipTicket;