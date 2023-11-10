import { useState } from "react";
import { Navigate } from "react-router-dom";
import * as flightsAPI from "../../utilities/flights-api";
import FlightsContainer from "../../components/FlightsContainer/FlightsContainer";
import "./TicketsSearchPage.css";

export default function TicketsSearchPage() {
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
  return (
    <div className="TicketsSearchPage">
      <form onSubmit={handleSearch}>
        <div className="inputs-container">
        <div className="flex-col  rocket">
          <label>Planet of Departure</label>
          <input name="departure" value={info.departure} onChange={handleChange}></input>
          <i class="fa-solid fa-rocket fa-xl input-i"></i>
        </div>
        <div className="flex-col rocket">
          <label>Planet of Arrival</label>
          <input name="arrival" value={info.arrival} onChange={handleChange}></input>
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
      {found && <FlightsContainer flights={flights} date={info.depDate} passengers={info.passengers}/>}

    </div>
  );
}