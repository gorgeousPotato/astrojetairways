import "./PassengerForm.css"

export default function PassengerForm({passengers}) {
    
 
  return (
    <div className="PassengerForm">
      {Array.from({ length: passengers }, (_, index) => (
        <div key={index + 1} >
          <h5>Passenger {index + 1}</h5>
          <form className="passenger">
            <label>First Name</label>
            <input />
            <label>Last Name</label>
            <input />
          </form>
        </div>
      ))}
    </div>
  );
}