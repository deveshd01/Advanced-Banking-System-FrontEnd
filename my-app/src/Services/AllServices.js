import React, { useState, useEffect } from 'react';

function AllServices() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/showAllServices')
      .then(response => response.json())
      .then(data => setServices(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>All Services</h1>
      <ul>
        {services.map(service => (
          <li key={service.s_id}>{service.serviceName}</li>
        ))}
      </ul>
    </div>
  );
}

export default AllServices;
