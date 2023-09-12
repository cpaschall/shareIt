import TicketForm from './TicketForm'
import './NewTicket.css'

const NewTicket = (props) => {

    const saveTicketDataHandler = (enteredTicketData) => {
        const ticketData = {
            ...enteredTicketData,
            id: Math.random().toString()
        }

        // console.log(ticketData);
        props.onAddTicket(ticketData)
    }
    return (
        <div className="new-ticket">
            <TicketForm onSaveTicketData={saveTicketDataHandler}/>
        </div>
    )
};

export default NewTicket