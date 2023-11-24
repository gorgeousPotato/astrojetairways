import "./TicketCardHistory.css"

export default function TicketCardHistory({ticket}) {
  function formatTime(ISOdate) {
    const date = new Date(ISOdate);
    const hours = date.getHours().toString().padStart(2, '0');  
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  function formatDate(ISOdate) {
    const date = new Date(ISOdate);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    return `${day} ${months[month]} ${year}`
  }
  return (
    <div className="TicketCardHistory">
      <div className="top">
        <h3>AstroJet</h3>
      </div>
      <div className="grid-container">
        <div className="flex-col pass-name">
          <p>PASSENGER</p>
          <h3>{ticket.firstName.toUpperCase()} {ticket.lastName.toUpperCase()}</h3>
        </div>
        <div className="flex-col">
          <p>ORIGIN</p>
          <h3>{ticket.flight.spaceportD}</h3>
          <h5>{ticket.flight.departure.toUpperCase()}</h5>
        </div>
        <div className="flex-col">
          <p>FLIGHT</p>
          <h3>{ticket.flight.flightN}</h3>
        </div>
        <div className="flex-col">
          <p>DESTINATION</p>
          <h3>{ticket.flight.spaceportA}</h3>
          <h5>{ticket.flight.arrival.toUpperCase()}</h5>
        </div>
        <div className="flex-col">
          <p>DATE</p>
          <h3>{formatDate(ticket.flight.depDate)}</h3>
        </div>
        <div className="flex-col">
          <p>TIME</p>
          <h3>{formatTime(ticket.flight.depDate)}</h3>
        </div>
        <div className="flex-col">
          <p>GATE</p>
          <h3>{ticket.flight.gate}</h3>
        </div>
      </div>
    </div>
  );
}