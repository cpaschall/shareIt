// import logo from './logo.svg';
// import './App.css';
// import TicketItem from './components/Tickets/TicketItem';
import Header from './components/Header';
import Tickets from './components/Tickets/Tickets'
// import Home from './pages/Home';
import NewTicket from './components/NewTicket/NewTicket';

const App = () => {
  const tickets = [
    {
      id: 1,
      date: new Date(2023, 7, 21), 
      employee: "Cal",
      ticket: "234510",
      tier: "3",
    },
    {
      id: 2,
      date: new Date(2023, 3, 5), 
      employee: "Brad",
      ticket: "432552",
      tier: "5",
    },
    {
      id: 3,
      date: new Date(2023, 5, 11), 
      employee: "Sean",
      ticket: "948816",
      tier: "Asset",
    },
    {
      id: 4,
      date: new Date(2023, 6, 30), 
      employee: "Kam",
      ticket: "117506",
      tier: "2",
    },
    {
      id: 5,
      date: new Date(2023, 8, 2), 
      employee: "Sean",
      ticket: "459234",
      tier: "5",
    },
  ]
  return (
    <div>
      <Header />
      <NewTicket />
      <Tickets tickets={tickets} />
      {/* <TicketItem 
      date={new Date(2023, 7, 21)} 
      employee="Cal"
      ticket="234510"
      tier="3"
      />
      <TicketItem 
      date={new Date(2023, 6, 5)}
      employee="Brad"
      ticket="923964"
      tier="2" 
      />
      <TicketItem 
      date={new Date(2023, 3, 13)}
      employee="Sean"
      ticket="123218"
      tier="Asset" 
      />
      <TicketItem 
      date={new Date(2023, 4, 9)}
      employee="Kam"
      ticket="453996"
      tier="4" 
      />  */}
    </div>
  );
}

export default App;
