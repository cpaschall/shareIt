import "./TicketItem.css"
import TicketDate from "./TicketDate";
import TicketCard from "../UI/TicketCard";
import { useState } from 'react'

const TicketItem = (props) => {

    const [currentTier, setCurrentTier] = useState(props.tier)

    const [currentTicket, setCurrentTicket] = useState(props.ticket)

    const clickHandler = (event) => {
        setCurrentTier(event.target.value)
    }

    const editHandler = () => {

    }

    return ( 
        <TicketCard className="ticket-item"> 
            <TicketDate date={props.date} />
            <div className="ticket-item__info">
                <div className="ticket-item__employee">
                    <h2>{props.employee}</h2>
                </div>
                <div className="ticket-item__data">
                    <div>Ticket: {props.ticket}</div>
                    <div>Tier: {currentTier}</div>
                </div>
                {/* <button onClick={clickHandler}>Change Title</button> */}
                <div>
                    <p>Select Tier</p>
                    <select value={currentTier} onChange={clickHandler}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={"Asset"}>Asset</option>
                    </select>
                    {/* <p onClick={editHandler}>Edit</p> */}
                </div>
            </div>
        </TicketCard>
    )
}

export default TicketItem;