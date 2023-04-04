import './Service.css';
import serviceIcon from "./Service.png";
import { useState } from 'react';

function AddServiceForm() {
  const [services, setServices] = useState([{ number: "", name: "" }]);

  const handleServiceNameChange = (event, index) => {
    const newServices = [...services];
    newServices[index].number = event.target.value;
    setServices(newServices);
  };

  const handleServiceDescriptionChange = (event, index) => {
    const newServices = [...services];
    newServices[index].name = event.target.value;
    setServices(newServices);
  };

  const handleAddService = () => {
    setServices([...services, { number: "", name: "" }]);
  };

  const handleRemoveService = (index) => {
    const newServices = [...services];
    newServices.splice(index, 1);
    setServices(newServices);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting services: `, services);
    // Send the form data to the server here
  };

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={serviceIcon} alt="service-icon" className="service-icon"/>
            </div>
          </div>
          <div>
            <h2>Add Service</h2>
            <form onSubmit={handleSubmit}>
              {services.map((service, index) => (
                <div key={index}>
                  <div>
                    <input type="number" placeholder="Service Number" className="name" value={service.number} onChange={(event) => handleServiceNameChange(event, index)}/>
                  </div>
                  <br/>
                  <div>
                    <textarea placeholder="Service Name" className="description" value={service.name} onChange={(event) => handleServiceDescriptionChange(event, index)}></textarea>
                  </div>
                  <br/>
                  {services.length > 1 && (
                    <button type="button" className="remove-service" onClick={() => handleRemoveService(index)}>Remove Service</button>
                  )}
                  <br/><br/>
                </div>
              ))}
              <div className="add-service-button">
                <button type="button" className="add-service" onClick={handleAddService}>Add Service</button>
              </div>
              <br/>
              <div className="submit-button">
                <a href="your-submit-page-url">
                  <button type="submit">Submit</button>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddServiceForm;



