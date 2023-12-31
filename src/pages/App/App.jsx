import './App.css';
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom"
import { getUser } from "../../utilities/users-service"
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import CheckoutPage from '../CheckoutPage/CheckoutPage';
import TicketsSearchPage from "../../pages/TicketsSearchPage/TicketsSearchPage";
import TicketsPage from '../TicketsPage/TicketsPage';
import FlightsHistory from '../FlightsHistory/FlightsHistory';
import About from '../About/About';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ? 
      <>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/flights" element={<TicketsSearchPage user={user}/>}/>
          <Route path="/flights/:id" element={<CheckoutPage />}/>
          <Route path="/flights/:id/tickets" element={<TicketsPage />}/>
          <Route path="/flights/history" element={<FlightsHistory user={user}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/*" element={<Navigate to="/flights" />} />
        </Routes>
      </>
          
          :
          <AuthPage setUser={ setUser }/>
      }
    </main>
  );
}


