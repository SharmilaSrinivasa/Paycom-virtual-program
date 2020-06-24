import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Welcome from "./components/Welcome/Welcome";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import CreateEvent from "./components/CreateEvent/CreateEvent";
import UpdateEvent from "./components/UpdateEvent/UpdateEvent";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/login" component={Login} />
      <Route path="/forgotpassword" component={ForgotPassword} />
      <Route path="/signup" component={Signup} />
      <Route path="/home" component={Home} />
      <Route path="/createevent" component={CreateEvent} />
      <Route path="/updateevent" component={UpdateEvent} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;