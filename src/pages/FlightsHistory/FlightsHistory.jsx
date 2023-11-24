import {useState, useEffect} from "react";
import * as FlightsAPI from "../../utilities/flights-api";
import TicketCardHistory from "../../components/TicketCardHistory/TicketCardHistory";
import "./FlightsHistory.css";

export default function FlightsHistory({user}) {
  const [tickets, setTickets] = useState([]);
  useEffect(function() {
    async function getHistory(user) {
      const tickets = await FlightsAPI.getHistory(user);
      setTickets(tickets);
    }
    getHistory(user);
  }, []);
  const ticketsList = tickets.map((ticket, key) => <TicketCardHistory ticket={ticket}/>)
  return (
    <div className="FlightsHistory">
      <h1>{user.name}'s flights history</h1>
      {ticketsList}
    </div>
  );
}