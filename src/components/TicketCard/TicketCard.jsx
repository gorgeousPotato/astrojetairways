import "./TicketCard.css"

export default function TicketCard({ticket, flight}) {
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
    <div className="TicketCard">
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
          <h3>{flight.spaceportD}</h3>
          <h5>{flight.departure.toUpperCase()}</h5>
        </div>
        <div className="flex-col">
          <p>FLIGHT</p>
          <h3>{flight.flightN}</h3>
        </div>
        <div className="flex-col">
          <p>DESTINATION</p>
          <h3>{flight.spaceportA}</h3>
          <h5>{flight.arrival.toUpperCase()}</h5>
        </div>
        <div className="flex-col">
          <p>DATE</p>
          <h3>{formatDate(flight.depDate)}</h3>
        </div>
        <div className="flex-col">
          <p>TIME</p>
          <h3>{formatTime(flight.depDate)}</h3>
        </div>
        <div className="flex-col">
          <p>GATE</p>
          <h3>{flight.gate}</h3>
        </div>
      </div>
    </div>
  );
}