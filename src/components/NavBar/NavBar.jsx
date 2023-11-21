import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
  function handleLogout() {
    userService.logOut();
    setUser(null);
  }
  return(
    
  <nav className="NavBar navbar navbar-expand-lg rounded " aria-label="Thirteenth navbar example">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
          <a class="navbar-brand col-lg-3 me-0 text-white logo" href="/flights">AstroJet</a>
          <ul class="navbar-nav col-lg-6 justify-content-lg-center">
            <li><Link to="#" class="nav-link px-2  text-light">Buy a Ticket</Link></li>
            <li><Link to="/offers" class="nav-link px-2  text-light">Special Offers</Link></li>
            <li><Link to="/services" class="nav-link px-2  text-light">Services</Link></li>
            <li><Link to="/bonus" class="nav-link px-2  text-light">AstroJet Bonus</Link></li>
            <li><Link to="/about" class="nav-link px-2  text-light">About AstroJet</Link></li>
          </ul>
          <div class="d-lg-flex col-lg-3 justify-content-lg-end">
            <button class="btn btn-primary">Button</button>
          </div>
        </div>
      </div>
    </nav>
  );
}