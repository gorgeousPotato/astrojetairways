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
      <p>PASSENGER</p>
      <h3>{ticket.firstName.toUpperCase()} {ticket.lastName.toUpperCase()}</h3>
      <p>ORIGIN</p>
      <h3>{flight.spaceportD}</h3>
      <h5>{flight.departure.toUpperCase()}</h5>
      <p>FLIGHT</p>
      <h3>{flight.flightN}</h3>
      <p>DESTINATION</p>
      <h3>{flight.spaceportA}</h3>
      <h5>{flight.arrival.toUpperCase()}</h5>
      <p>DATE</p>
      <h3>{formatDate(flight.depDate)}</h3>
      <p>TIME</p>
      <h3>{formatTime(flight.depDate)}</h3>
    </div>
  );
}