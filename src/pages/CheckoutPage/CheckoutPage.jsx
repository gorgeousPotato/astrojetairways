import {useState, useEffect} from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import * as flightsAPI from "../../utilities/flights-api";
import PassengerForm from "../../components/PassengerForm/PassengerForm";
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
  const [passengers, setPassengers] = useState('0');
  const [flightClass, setFlightClass] = useState('economy');
  const [passNames, setPassNames] = useState([]);
  const {id} = useParams();
  const url = new URL(window.location.href);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const passengersNum = searchParams.get('passengers');
  const classN = searchParams.get('class');
  
  useEffect(function() {
    async function getFlight(idx) {
      const flight = await flightsAPI.getFlight(idx);
      setFlight(flight);
      setPassengers(passengersNum);
      setFlightClass(classN);
    };
    getFlight(id)
  }, []);

  function getMonthFromDate(dateString) {
    const date = new Date(dateString);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[date.getMonth()];
    return month;
  }
  function getTime(ISOdate) {
    const date = new Date(ISOdate);
    const hours = date.getHours().toString().padStart(2, '0');  
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  const arr = new Date(flight.arrDate);
  const dep = new Date(flight.depDate);
  // const priceE = flight.ecoPrice * passengers;
  // const priceB = flight.busPrice * passengers;
  const price = flightClass === 'economy' ? flight.ecoPrice * passengers : flight.busPrice * passengers;
  
  function onInputChange(index, fieldName, value) {
    const updatedPassData = [...passNames];
    updatedPassData[index] = {
      ...updatedPassData[index], 
      [fieldName]: value,
    }
    setPassNames(updatedPassData);
  }
  
  const navigate = useNavigate();
  async function handleClick() {
    const ticketPromises = passNames.map(async (pass, key) => {
      const newTicket = {
        flight: flight._id,
        firstName: pass.firstName,
        lastName: pass.lastName,
      };
      return await flightsAPI.addTicket(flight._id, newTicket);
    }) 
    const newTickets = await Promise.all(ticketPromises);
    navigate(`/flights/${flight._id}/tickets`);
  }
  return (
    <div className="CheckoutPage">
      <h1>Flight from {flight.departure} ({flight.spaceportD}) to {flight.arrival} ({flight.spaceportA})</h1>
      <h3>{flight.depDate.substring(8,10)} {getMonthFromDate(flight.depDate)} {flight.depDate.substring(0, 4)}</h3>
      <div className="grid-container">
        <div className="flex-row">
          <div className="flex-icon">
            <i class="fa-solid fa-rocket fa-xl icon-2"></i>
            <div>
              <h3>{flight.departure}</h3>
              <h3>{getTime(flight.depDate)}</h3>
            </div>
          </div>
          <div className="line"></div>
          <div className="flex-icon">
            <i class="fa-solid fa-rocket fa-flip-vertical fa-xl icon-2"></i>
            <div>
              <h3>{flight.arrival}</h3>
              <h3>{getTime(flight.arrDate)}</h3>
            </div>
          </div>
        </div>
        <div className="price-details">
          <h3>Price Details</h3>
          <h5>Flight price - ${price}</h5>
          <hr></hr>
          <p>Base fare - ${price * 0.8}</p>
          <p>Fuel surcharge - ${price * 0.08}</p>
          <p>Taxes and fees - ${price * 0.12}</p>
        </div>
        <div className="passengers">
          <h3>Passengers information</h3>
          <PassengerForm passengers={passengers} onInputChange={onInputChange}/>
          <button className="buy-btn" onClick={handleClick}>Buy tickets</button>
        </div>
      </div>
    </div>
  );
}