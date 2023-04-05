import './Counter.css';
import serviceIcon from "./Counter.png";
import { useEffect, useState } from 'react';
import axios from 'axios';

let baseURL = "http://localhost:8080";

function Counter() {
  const [servicesList, setservicesList] = useState([]);

  const [allServiceResponce, setallServiceResponce] = useState([]);
  useEffect(() => {
    axios.get(baseURL + '/showAllServices').then((response) => {
      setallServiceResponce(response.data);
    });
  }, [])

  const [services, setServices] = useState([]);
  const [counterName, setCounterName] = useState("");
  const [counterPassword, setCounterPassword] = useState("");

  const handleServiceChange = (event, service) => {
    const checked = event.target.checked;
    if (service === "Select All") {
      // Select or deselect all services based on the state of the "Select All" checkbox
      if (checked) {
        setServices(servicesList);
      } else {
        setServices([]);
      }
      document.querySelectorAll('input[type=checkbox]').forEach(el => {
        el.checked = checked;
      });
    } else {
      // Handle individual service checkbox changes
      if (checked) {
        setServices([...services, service]);
      } else {
        const newServices = services.filter((s) => s !== service);
        setServices(newServices);
      }
    }
  };

  const handleCounterNameChange = (event) => {
    setCounterName(event.target.value);
  };
  const handleCounterPasswordChange = (event) => {
    setCounterPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (counterName === '') alert("Enter Counter Number");
    else if (counterPassword === '') alert("Enter Password ");
    else {
      axios.post(baseURL + '/addCounter', {
        "counterNo": counterName,
        "password": counterPassword,
        "serviceIds": services
      }).then((response) => {
        alert(response.data.message);
      });
    }
  };

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={serviceIcon} alt="service-icon" className="service-icon" />
            </div>
          </div>
          <div>
            <h2>Add Counter</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>
                  Counter Number:
                  <input type="text" value={counterName} onChange={handleCounterNameChange} />
                </label>
                <label>
                  Counter Password :
                  <input type="text" value={counterPassword} onChange={handleCounterPasswordChange} />
                </label>

              </div>
              {allServiceResponce.map((service) => (
                <div key={service.serviceName}>
                  <label>
                    <input type="checkbox" onChange={(event) => handleServiceChange(event, service.s_id)} />&nbsp;&nbsp;
                    {service.serviceName}
                  </label>
                </div>
              ))}
              <div>
                <label>
                  <input type="checkbox" onChange={(event) => handleServiceChange(event, "Select All")} />&nbsp;&nbsp;
                  Select All
                </label>
              </div>
              <br />
              <div className="submit-button">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;










































// import './Counter.css';
// import serviceIcon from "./Counter.png";
// import { useState } from 'react';


// function AddServiceForm() {
//   const [services, setServices] = useState([{ number: "" }]);

//   const handleServiceNumberChange = (event, index) => {
//     const newServices = [...services];
//     newServices[index].number = event.target.value;
//     setServices(newServices);
//   };

//   const handleAddService = () => {
//     setServices([...services, { number: "" }]);
//   };

//   const handleRemoveService = (index) => {
//     const newServices = [...services];
//     newServices.splice(index, 1);
//     setServices(newServices);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(`Submitting services: `, services);
//     // Send the form data to the server here
//   };

//   return (
//     <div className="main">
//       <div className="sub-main">
//         <div>
//           <div className="imgs">
//             <div className="container-image">
//               <img src={serviceIcon} alt="service-icon" className="service-icon"/>
//             </div>
//           </div>
//           <div>
//             <h2>Add Counter</h2>
//             <form onSubmit={handleSubmit}>
//               {services.map((service, index) => (
//                 <div key={index}>
//                   <div>
//                     <input type="number" placeholder="Counter Number" className="name" value={service.number} onChange={(event) => handleServiceNumberChange(event, index)}/>
//                   </div>
//                   <br/>
//                   {services.length > 1 && (
//                     <button type="button" className="remove-service" onClick={() => handleRemoveService(index)}>Remove Counter</button>
//                   )}
//                   <br/><br/>
//                 </div>
//               ))}
//               <div className="add-service-button">
//                 <button type="button" className="add-service" onClick={handleAddService}>Add Counter</button>
//               </div>
//               <br/>
//               <div className="submit-button">
//                 <a href="your-submit-page-url">
//                   <button type="submit">Submit</button>
//                 </a>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddServiceForm;
