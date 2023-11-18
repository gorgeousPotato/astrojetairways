
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import * as FlightsAPI from "../../utilities/flights-api"
import "./TicketsPage.css"

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
    getTickets(id)
  }, []);
  return (
    <h1>Tickets</h1>
  );
}