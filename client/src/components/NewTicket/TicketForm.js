import { useDebugValue, useState } from 'react';
import './TicketForm.css'

const TicketForm = (props) => {
    const [employeeName, setEmployeeName] = useState('');
    const [ticketNumber, setTicketNumber] = useState('');
    const [ticketTier, setTicketTier] = useState('');
    const [ticketDate, setTicketDate] = useState(new Date());

    // const [userInput, setUserInput] = useState({
    //     employeeName:'',
    //     ticketNumber:'',
    //     ticketTier: '',
    //     ticketDate: '',
    // });

    const employeeNameChangeHandler = (e) => {
        setEmployeeName(e.target.value)
        // setUserInput((prevState) => {
        //     return {...prevState, employeeName: e.target.value,
        //     }
        // })
    };

    const ticketNumberHandler = (e) => {
        setTicketNumber(e.target.value)
        // setUserInput((prevState) => {
        //     return {...prevState, ticketNumber: e.target.value,
        //     }
        // })
    }

    const ticketTierHandler = (e) => {
        setTicketTier(e.target.value)
        // setUserInput((prevState) => {
        //     return {...prevState, ticketTier: e.target.value,
        //     }
        // })
    }

    const ticketDateHandler = (e) => {
        setTicketDate(e.target.value)
        // setUserInput((prevState) => {
        //     return {...prevState, ticketDate: e.target.value,
        //     }
        // })
    }

    // const inputChangeHandler = (identifier, value) => {
    //     if(identifier === 'employee') {
    //         setUserInput((prevState) => { return {...prevState, value}})
    //     } elseif (identifier === 'ticket number') {

    //     }
    // }

    const submitHandler = (e) => {
        e.preventDefault();

        const ticketData = {
            employee: employeeName,
            ticket: ticketNumber,
            tier: ticketTier,
            date: new Date(ticketDate)
        }

        // console.log(ticketData);
        props.onSaveTicketData(ticketData);
        setEmployeeName('');
        setTicketNumber('');
        setTicketTier('');
        setTicketDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-ticket__controls'>
                <div className='new-ticket__control'>
                    <label>Employee</label>
                    <input type='text' value={employeeName} onChange={employeeNameChangeHandler}></input>
                </div>
                <div className='new-ticket__control'>
                    <label>Ticket Number</label>
                    <input type='text' onChange={ticketNumberHandler}></input>
                </div>
                <div className='new-ticket__control'>
                    <label>Ticket Tier</label>
                    <input type='text' onChange={ticketTierHandler}></input>
                </div>
                <div className='new-ticket__control'>
                    <label>Date</label>
                    <input type='date' onChange={ticketDateHandler}></input>
                </div>
            </div> 
            <div className='new-ticket__actions'>
                <button type='submit'>Add Ticket</button>
            </div> 
        </form>
    )
};

export default TicketForm;