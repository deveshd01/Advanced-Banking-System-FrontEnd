import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import './Token.css'; // Import the CSS file

const serviceOptions = [  ["Deposit", "Transfer", "Catch All Counter"],
  ["Withdrawal", "Create Account", "Passbook Print"],
  ["Balance Inquiry", "Delete Account", "Statement Print"],
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
      &nbsp;
      <h1>Welcome!</h1>
      <div id="contact-form">
        <div>
          <span>Choose Services:</span>
        </div>
        <div className="services-grid">
          {serviceOptions.map((column, index) => (
            <div className="service-column" key={index}>
              {column.map((service) => (
                <Button
                  key={service}
                  className={`service-button ${selectedServices.includes(service) ? "selected" : ""}`}
                  onClick={() => handleServiceClick(service)}
                >
                  {service}
                </Button>
              ))}
            </div>
          ))}
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="submit">
            <div className="saurabh">
              <Button
                name="submit"
                type="submit"
                id="submit"
                style={{ width: '100px' }}
              >
                Generate Token
              </Button>
            </div>
          </div>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default TokenForm;






