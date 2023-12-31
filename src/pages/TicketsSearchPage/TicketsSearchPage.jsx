import { useState } from "react";
import { Navigate } from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import * as flightsAPI from "../../utilities/flights-api";
import FlightsContainer from "../../components/FlightsContainer/FlightsContainer";
import BannersFirstPage from "../../components/BannersFirstPage/BannersFirstPage";
import "./TicketsSearchPage.css";

export default function TicketsSearchPage({user}) {
  const [info, setInfo] = useState({
    departure: '',
    arrival: '',
    depDate: '',
    passengers: '1',
  });
  const [found, setFound] = useState(false);
  const [flights, setFlights] = useState([]);
  function handleChange(evt) {
    setInfo({...info, [evt.target.name]: evt.target.value})
  }
  async function handleSearch(evt) {
    evt.preventDefault();
    const url = `/api/search?departure=${info.departure}&arrival=${info.arrival}&date=${info.depDate}`;
    const result = await flightsAPI.search(url);
    setFound(true);
    setFlights(result);
  }
  function capitalize(inputString) {
    if (inputString.length === 0) {
      return "";
    }
    const capitalizedString =
      inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();
  
    return capitalizedString;
  }
  return (
    <div className="TicketsSearchPage">
      <h3>Hi, {user.name}! Which celestial destination calls to you for an interplanetary adventure?</h3>
      <form onSubmit={handleSearch}>
        <div className="inputs-container">
        <div className="flex-col  rocket">
          <label>Planet of Departure</label>
          <input name="departure" value={capitalize(info.departure)} onChange={handleChange} autoComplete="off"></input>
          <i class="fa-solid fa-rocket fa-xl input-i"></i>
        </div>
        <div className="flex-col rocket">
          <label>Planet of Arrival</label>
          <input name="arrival" value={capitalize(info.arrival)} onChange={handleChange} autoComplete="off"></input>
          <i class="fa-solid fa-rocket fa-flip-vertical fa-xl input-i"></i>
        </div>
        <div className="flex-col">
          <label>Depart</label>
          <input name="depDate" type='date' value={info.depDate} onChange={handleChange}></input>
        </div>
        </div>
        <div className="button-container">
          <div className="flex-col">
            <label>Passengers</label>
            <select name="passengers" id="" value={info.passengers} onChange={handleChange} default="1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
            </select>
          </div>
          <button type="submit" className="search-btn">Search</button>
        </div>
      </form>
      <CSSTransition
        in={found}
        timeout={300} // Duration of the transition in milliseconds
        classNames="fade" // CSS class prefix for the transition
        unmountOnExit
      >
        <FlightsContainer flights={flights} date={info.depDate} passengers={info.passengers}/> 
      </CSSTransition>
      <CSSTransition
        in={!found}
        timeout={300} // Duration of the transition in milliseconds
        classNames="fade" // CSS class prefix for the transition
        unmountOnExit
      >
        <BannersFirstPage />
      </CSSTransition>
      
      

    </div>
  );
}