import {useState, useEffect} from "react";
import * as FlightsAPI from "../../utilities/flights-api";
import "./FlightsHistory.css";

export default function FlightsHistory() {
  const [tickets, setTickets] = useState([]);
  useEffect(function() {
    async function getHistory() {
      const tickets = await FlightsAPI.getHistory();
      setTickets(tickets);
    }
    getHistory();
  }, []);
  return (
    <div>
      <h1>Flights History</h1>
    </div>
  );
}