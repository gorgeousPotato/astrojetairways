import "./PassengerForm.css"

export default function PassengerForm({passengers, onInputChange}) {
    
  function handleChange(index, fieldName, evt) {
    const {value} = evt.target;
    onInputChange(index, fieldName, value);
  }
  return (
    <div className="PassengerForm">
      {Array.from({ length: passengers }, (_, index) => (
        <div key={index + 1} >
          <h5>Passenger {index + 1}</h5>
          <form className="passenger">
            <label>First Name</label>
            <input onChange={(evt) => handleChange(index, 'firstName', evt)}/>
            <label>Last Name</label>
            <input onChange={(evt) => handleChange(index, 'lastName', evt)}/>
          </form>
        </div>
      ))}
    </div>
  );
}