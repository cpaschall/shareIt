import "./TicketDate.css"

function TicketDate(props) {
    
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();
    
    return (
        <div className="ticket-date">
            <div className="ticket-date__month">{month}</div>
            <div className="ticket-date__day">{day}</div>
            <div className="ticket-date__year">{year}</div>
        </div>
    )
};

export default TicketDate;