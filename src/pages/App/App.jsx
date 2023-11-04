import './App.css';
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom"
import { getUser } from "../../utilities/users-service"
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import TicketsSearchPage from "../../pages/TicketsSearchPage/TicketsSearchPage";

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ? 
      <>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/flights" element={<TicketsSearchPage />}/>
          <Route path="/orders" element={<OrderHistoryPage />}/>
          <Route path="/*" element={<Navigate to="/flights" />} />
        </Routes>
      </>
          
          :
          <AuthPage setUser={ setUser }/>
      }
    </main>
  );
}


