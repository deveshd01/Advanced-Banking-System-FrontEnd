import React, { useState } from "react";
import "./Manager.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Service from "../Services/Service";
import Counter from "../Counter/Counter";
import AddForm from "../Executive/AddExecutive/AddForm";
import ManagerProfile from "./ManagerProfile";


function Manager() {
  const closeAllCounter = () => {
    // dialog box for password;

    alert("Delete all Api Call Start")
    // axios.get(baseURL + '/emptyAllCounter').then((response) => {
    //   alert("!!!!... All Tokens Deleted ...!!!!")
    // });
  };

  const updateCounter = () => {
    alert("Update Counter **********************")
  };

  return (
    <div className="manager">
      <div>
        <div className="topButton">
          <button id="bt1" onClick={() => closeAllCounter()}>Close All Counters</button>
          <a href="/"><button>Stats</button></a>
          <button id="bt2" onClick={() => updateCounter()}>Update Counter</button>
        </div>
        <h2>Manager-DashBoard </h2>
        <div className="manager-actions">
          <a href="/service"><button>Add Service</button></a>
          <a href="/counter"><button>Add Counter</button></a>
          <a href="/addExecutive"><button>Add Executive</button></a>
          
        </div>
        <div>
        </div>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={< ManagerProfile />}></Route>
            <Route exact path='/service' element={< Service />}></Route>
            <Route exact path='/counter' element={< Counter />}></Route>
            <Route exact path='/addExecutive' element={<AddForm obj={{
              url: "/addExecutive",
              heading: "Add Executive",
              one: "name",
              two: "email",
              three: "mob",
              four: "password"
            }} />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Manager;



