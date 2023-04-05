import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
// npm install react-bootstrap bootstrap
import './Token.css';
import axios from "axios";

let baseURL = 'http://localhost:8080';

const serviceOptions = [
  { id: 9, name: "Statement Print", avgTime: 9 },
  { id: 10, name: "Online Banking", avgTime: 10 },
  { id: 11, name: "ATM Card Service", avgTime: 11 },
  { id: 1, name: "Deposit", avgTime: 1 },
  { id: 2, name: "Transfer", avgTime: 2 },
  { id: 3, name: "Catch All Counter", avgTime: 3 },
  { id: 4, name: "Withdrawal", avgTime: 4 },
  { id: 5, name: "Create Account", avgTime: 5 },
  { id: 6, name: "Passbook Print", avgTime: 6 },
  { id: 7, name: "Balance Inquiry", avgTime: 7 },
  { id: 8, name: "Delete Account", avgTime: 8 },
  { id: 12, name: "Yet Another Service", avgTime: 12 }
];

const TokenForm = () => {
  const [selectedServices, setSelectedServices] = useState([]);


  const handleServiceClick = (service) => {
    if (selectedServices.includes(service.name)) {
      setSelectedServices(selectedServices.filter(s => s !== service.name));
    } else {
      setSelectedServices([...selectedServices, service.name]);
    }
  };
  const [message, setMessage] = useState("");


  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (selectedServices.length > 0) {
      const names = selectedServices.join(", ");
      console.log("Selected Services:", names);
      setMessage(`Token generated for services: ${names}.`);
    } else {
      setMessage("Please select at least one service.");
    }
  };
  const handleRefreshClick = () => {
    setSelectedServices([]);
    setMessage("");
  };

  return (
    <div className="form-wrapper">
      <h1>Welcome!</h1>
      <div id="contact-form">
        <div>
          <span>Choose Services:</span>
        </div>
        <Button
          name="refresh"
          type="button"
          id="refresh"
          variant="secondary"
          onClick={handleRefreshClick}
        >
          Refresh
        </Button>
        <table className="services-table">
          <tbody>
            {[0, 1, 2, 3].map((rowIndex) => (
              <tr key={rowIndex}>
                {[0, 1, 2].slice(0, serviceOptions[rowIndex].length).map((colIndex) => {
                  const serviceIndex = rowIndex * 3 + colIndex;
                  const service = serviceOptions[Math.floor(serviceIndex / 3)][serviceIndex % 3];
                  return (
                    <td key={service.id}>
                      <Button
                        className={`service-button ${selectedServices.includes(service.name) ? "selected" : ""}`}
                        onClick={() => handleServiceClick(service)}
                        value={service.id}
                      >
                        {service.name}
                      </Button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <form onSubmit={handleFormSubmit}>
          <div className="submit">
            <Button
              name="submit"
              type="submit"
              id="submit"


              style={{ width: '100px', backgroundColor: 'green', color: 'white' }}
            >
              Generate Token
            </Button>

          </div>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};
export default TokenForm;