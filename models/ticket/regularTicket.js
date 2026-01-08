import Ticket from "./ticket.js";
import {v4} from 'uuid';

class RegularTicket extends Ticket{

     constructor(price, ownerName=null){
        super(v4(), price, ownerName)
     }
}

export default RegularTicket;
