import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";

const Controller = () => {
  return (
      <DashboardLayout>
          This is Controller
      <Router>
        <Switch>
          <Route/>
        </Switch>
      </Router>
    </DashboardLayout>
  );
};

export default Controller;
