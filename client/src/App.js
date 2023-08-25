import logo from './logo.svg';
import './App.css';
import TicketItem from './components/TicketItem';
// import Home from './pages/Home';

function App() {
  return (
    <div>
      <h2>ShareIT Ticket Tracker</h2>
      <p>This is a test</p>
      <TicketItem 
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
      /> 
    </div>
  );
}

export default App;
