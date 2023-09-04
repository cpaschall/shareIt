import "./TicketCard.css"

const TicketCard = (props) => {
    const classes = 'ticket-card ' + props.className
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
};

export default TicketCard;