import "./TicketItem.css"
import TicketDate from "./TicketDate";

function TicketItem(props) {
   
    let ticketDate = new Date();
    let ticketEmployee;
    let ticketNumber;
    let ticketTier;

    return ( 
        <div className="ticket-item"> 
            <TicketDate date={props.date} />
            <div className="ticket-item__info">
                <div className="ticket-item__employee">
                    <h2>{props.employee}</h2>
                </div>
                <div className="ticket-item__data">
                    <div>Ticket: {props.ticket}</div>
                    <div>Tier: {props.tier}</div>
                </div>
            </div>
        </div>
    )
}

export default TicketItem;