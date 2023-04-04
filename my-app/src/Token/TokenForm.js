import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import './Token.css'; // Import the CSS file

const serviceOptions = [
  "Deposit",
  "Withdrawal",
  "Balance Inquiry",
  "Transfer",
  "Create Account",
  "Delete Account",
  "Catch All Counter",
  "Passbook Print",
  "Statement Print",
];

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
          {serviceOptions.map((service) => (
            <Button
              key={service}
              className={`service-button ${selectedServices.includes(service) ? "selected" : ""}`}
              onClick={() => handleServiceClick(service)}
            >
              {service}
            </Button>
          ))}
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





