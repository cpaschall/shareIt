import './TicketForm.css'

const TicketForm = () => {

    return (
        <form>
            <div className='new-ticket__controls'>
                <div className='new-ticket__control'>
                    <label>Employee</label>
                    <input type='text'></input>
                </div>
                <div className='new-ticket__control'>
                    <label>Ticket Number</label>
                    <input type='text'></input>
                </div>
                <div className='new-ticket__control'>
                    <label>TicketForm</label>
                    <input type='text'></input>
                </div>
                <div className='new-ticket__control'>
                    <label>Date</label>
                    <input type='date'></input>
                </div>
            </div> 
            <div className='new-ticket__actions'>
                <button type='submit'>Add Ticket</button>
            </div> 
        </form>
    )
};

export default TicketForm;