import TicketItem from './TicketItem';
import TicketCard from '../UI/TicketCard'
import './Tickets.css';

const Tickets = (props) => {
    return (
        <TicketCard className="tickets">
            {props.tickets.map((ticket) => (
                <TicketItem 
                    key={ticket.id}
                    employee={ticket.employee}
                    ticket={ticket.ticket}
                    tier={ticket.tier}
                    date={ticket.date}
                />
            ))}
            {/* <TicketItem 
                employee={props.tickets[0].employee}
                ticket={props.tickets[0].ticket}
                tier={props.tickets[0].tier}
                date={props.tickets[0].date}
            />
            <TicketItem 
                employee={props.tickets[1].employee}
                ticket={props.tickets[1].ticket}
                tier={props.tickets[1].tier}
                date={props.tickets[1].date}
            />
            <TicketItem 
                employee={props.tickets[2].employee}
                ticket={props.tickets[2].ticket}
                tier={props.tickets[2].tier}
                date={props.tickets[2].date}
            />
            <TicketItem 
                employee={props.tickets[3].employee}
                ticket={props.tickets[3].ticket}
                tier={props.tickets[3].tier}
                date={props.tickets[3].date}
            /> */}
        </TicketCard>
    )
}

export default Tickets;