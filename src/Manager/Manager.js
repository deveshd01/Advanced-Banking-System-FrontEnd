import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './Manager.css';

import Service from "./Services/Service";
import Counter from "./Counter/Counter";
import Executive from "./Executive/Executive";

function Manager() {
  return (
    <BrowserRouter>
      <div className="manager">
        <h2>Manager - Dashboard </h2>
        <div className="manager-actions">
          <button onClick={() => window.location.href = "/services"}>Add Service</button>
          <button onClick={() => window.location.href = "/counters"}>Add Counter</button>
          <button onClick={() => window.location.href = "/executives"}>Add Executive</button>
        </div>
        <div className="bd">
          <Switch>
            <Route path="/services">
              <Service />
            </Route>
          </Switch>
          <Switch>
            <Route path="/counters">
              <Counter />
            </Route>
          </Switch>
          <Switch>
            <Route path="/executives">
              <Executive />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Manager;




















