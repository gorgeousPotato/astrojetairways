import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import * as flightsAPI from "../../utilities/flights-api";
import "./CheckoutPage.css"

export default function CheckoutPage() {
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
    async function getFlight(idx) {
      const flight = await flightsAPI.getFlight(idx);
      setFlight(flight);
    };
    getFlight(id)
  }, []);

  return (
    <h1>Flight</h1>
  );
}