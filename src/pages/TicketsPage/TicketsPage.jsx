
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import * as FlightsAPI from "../../utilities/flights-api"
import "./TicketsPage.css"
import TicketCard from "../../components/TicketCard/TicketCard";

export default function TicketsPage() {
  const [tickets, setTickets] = useState([]);
  const [flight, setFlight] = useState({
    flightN: '',
    departure: '',
    arrival: '',
    depDate: '',
    arrDate: '',
    ecoPrice: '',
    busPrice: '',
    aircraft: '',
    spaceportD: '',
    spaceportA: '',
  });
  const {id} = useParams();
  useEffect(function() {
    async function getTickets(idx) {
      const tickets = await FlightsAPI.getTickets(idx);
      setTickets(tickets);
    }
    async function getFlight(idx) {
      const flight = await FlightsAPI.getFlight(idx);
      setFlight(flight);
    }
    getTickets(id);
    getFlight(id);
  }, []);
  const ticketsList = tickets.map((ticket, key) => <TicketCard ticket={ticket} flight={flight}/>)
  return (
    <div className="TicketsPage">
      <h1>Tickets</h1>
        {ticketsList}
    </div>
    
  );
}