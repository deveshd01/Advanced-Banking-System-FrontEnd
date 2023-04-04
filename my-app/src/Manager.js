import React, { useState } from "react";
import "./Manager.css";

function Manager() {
  const [services, setServices] = useState([]);
  const [counters, setCounters] = useState([]);
  const [executives, setExecutives] = useState([]);

  const addService = (service) => {
    setServices([...services, service]);
    alert(`${service} added to services`);
  };

  const addCounter = (counter) => {
    setCounters([...counters, counter]);
    alert(`${counter} added to counters`);
  };

  const addExecutive = (executive) => {
    setExecutives([...executives, executive]);
    alert(`${executive} added to executives`);
  };

  return (
    <div className="manager">
      <div>
        <h2>Manager </h2>
        <div className="manager-actions">
          <button onClick={() => addService("Service")}>Add Service</button>
          <button onClick={() => addCounter("Counter")}>Add Counter</button>
          <button onClick={() => addExecutive("Executive")}>Add Executive</button>
        </div>
        <div className="manager-lists">
          {/* <h3>Services</h3> */}
          <ul>
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
          {/* <h3>Counters</h3> */}
          <ul>
            {counters.map((counter) => (
              <li key={counter}>{counter}</li>
            ))}
          </ul>
          {/* <h3>Executives</h3> */}
          <ul>
            {executives.map((executive) => (
              <li key={executive}>{executive}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Manager;



