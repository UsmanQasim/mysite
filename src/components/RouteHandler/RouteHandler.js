import React from "react";
//import { motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Nav from "../Navbar";
import Main from "../Main";
import About from "../About";
import Contact from "../Contact";
import pageNotFound from "../PageNoFound";

const RouteHandler = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/notfound" component={pageNotFound} />
        {/* <Route exact path="/" component={Home} /> */}
        <Route>
          <Nav />
          <Switch>
            {/* <Route exact path="/projects" component={Projects} /> */}
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            {/* <Route exact path="/contact/leave-a-message" component={Message} /> */}
            <Redirect to="/notfound" />
          </Switch>
        </Route>
      </Switch>
    </Router>
  );
};

export default RouteHandler;
