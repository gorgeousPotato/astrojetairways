import { Link } from "react-router-dom"
import * as userService from "../../utilities/users-service"

export default function NavBar({ user, setUser }) {
  function handleLogout() {
    userService.logOut();
    setUser(null);
  }
  return(
    // <nav>
    //   <Link to="/orders">Order History</Link>
    //   &nbsp; | &nbsp;
    //   <Link to="/orders/new">New Order</Link>
    //   <h3>Welcome, {user.name}</h3>
    //   <Link to="" onClick={ handleLogout }>Log Out</Link>
    // </nav>
  //   <div class="container">
  //   <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
  //     <div class="col-md-3 mb-2 mb-md-0">
  //       <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
  //         {/* <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg> */}
  //         <h3>AstroJet</h3>
  //       </a>
  //     </div>

  //     <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
  //       <li><Link to="#" class="nav-link px-2 link-secondary">Buy a Ticket</Link></li>
  //       <li><Link to="/offers" class="nav-link px-2">Special Offers</Link></li>
  //       <li><Link to="/services" class="nav-link px-2">Services</Link></li>
  //       <li><Link to="/bonus" class="nav-link px-2">AstroJet Bonus</Link></li>
  //       <li><Link to="/about" class="nav-link px-2">About AstroJet</Link></li>
  //     </ul>

  //     <div class="col-md-3 text-end">
  //       <button type="button" class="btn btn-outline-primary me-2">Login</button>
  //       <button type="button" class="btn btn-primary">Sign-up</button>
  //     </div>
  //   </header>
  // </div>
  <nav class="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Thirteenth navbar example">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
          <a class="navbar-brand col-lg-3 me-0" href="#">AstroJet</a>
          <ul class="navbar-nav col-lg-6 justify-content-lg-center">
            <li><Link to="#" class="nav-link px-2">Buy a Ticket</Link></li>
            <li><Link to="/offers" class="nav-link px-2">Special Offers</Link></li>
            <li><Link to="/services" class="nav-link px-2">Services</Link></li>
            <li><Link to="/bonus" class="nav-link px-2">AstroJet Bonus</Link></li>
            <li><Link to="/about" class="nav-link px-2">About AstroJet</Link></li>
          </ul>
          <div class="d-lg-flex col-lg-3 justify-content-lg-end">
            <button class="btn btn-primary">Button</button>
          </div>
        </div>
      </div>
    </nav>
  );
}