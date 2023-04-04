import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import './Token.css'; // Import the CSS file

const TokenForm = () => {
  const [selectedServices, setSelectedServices] = useState([]); // Initialize the state variable for the selected services
  const [message, setMessage] = useState(""); // Initialize the state variable for the message to be displayed

  const handleServiceClick = (service) => {
    if (selectedServices.includes(service)) { // If the service is already selected, remove it
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else { // Otherwise, add it to the selected services
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    if (selectedServices.length > 0) {
      setMessage(`Token generated for ${selectedServices.join(", ")}.`); // Set the message to be displayed based on the selected services
    } else {
      setMessage("Please select at least one service."); // Display an error message if no service is selected
    }
  };
  return (
    <div className="form-wrapper">
      <div id="contact-form">
        <div>
          <h1>Thank you for visiting !</h1> 
          &nbsp;
          <span>Choose Services:</span>
          &nbsp;&nbsp;
        </div>
        <div className="services-row">
          <Button className={`service-button ${selectedServices.includes("deposit") ? "selected" : ""}`} onClick={() => handleServiceClick("deposit")}>Deposit</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button className={`service-button ${selectedServices.includes("withdrawal") ? "selected" : ""}`} onClick={() => handleServiceClick("withdrawal")}>Withdrawal</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button className={`service-button ${selectedServices.includes("balance inquiry") ? "selected" : ""}`} onClick={() => handleServiceClick("balance inquiry")}>Balance Inquiry</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button className={`service-button ${selectedServices.includes("transfer") ? "selected" : ""}`} onClick={() => handleServiceClick("transfer")}>Transfer</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button className={`service-button ${selectedServices.includes("Create Account") ? "selected" : ""}`} onClick={() => handleServiceClick("Create Account")}>Create Account</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button className={`service-button ${selectedServices.includes("Delete Account") ? "selected" : ""}`} onClick={() => handleServiceClick("Delete Account")}>Delete Account</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button className={`service-button ${selectedServices.includes("catch all counter") ? "selected" : ""}`} onClick={() => handleServiceClick("catch all counter")}>Catch All Counter</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button className={`service-button ${selectedServices.includes("Passbook Print") ? "selected" : ""}`} onClick={() => handleServiceClick("Passbook Print")}>Passbook Print</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button className={`service-button ${selectedServices.includes("Statement print") ? "selected" : ""}`} onClick={() => handleServiceClick("Statement print")}>Statement print</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;

  
</div>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <form onSubmit={handleFormSubmit}>
        <div className="submit">
  <Button
    name="submit"
    type="submit"
    id="submit"
    style={{ width: '100px' }}
  >
    Generate Token
  </Button>
</div>

        </form>
        {message && <p className="message">{message}</p>} {/* Display the message if there is one */}
      </div>
    </div>
  );
}

export default TokenForm;





