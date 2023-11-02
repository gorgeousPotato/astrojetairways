import { useState } from "react";

import "./TicketsSearchPage.css"

export default function TicketsSearchPage() {
  const [info, setInfo] = useState({
    departure: '',
    arrival: '',
    depDate: '',
    passengers: '',
  })
  function handleChange(evt) {
    setInfo({...info, [evt.target.name]: evt.target.value})
  }
  return (
    <div className="TicketsSearchPage">
      <form>
        <label>Planet of Departure</label>
        <input name="departure" value={info.departure} onChange={handleChange}></input>
        <label>Planet of Arrival</label>
        <input name="arrival" value={info.arrival} onChange={handleChange}></input>
        <label>Depart</label>
        <input name="depDate" type='date' value={info.depDate} onChange={handleChange}></input>
        <label>Passengers</label>
        <select name="passengers" id="" value={info.passengers} onChange={handleChange}>
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
        <button type="submit">Search</button>
      </form>
    </div>
  );
}