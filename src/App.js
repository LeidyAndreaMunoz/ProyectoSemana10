import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './views/Homepage';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/carddetail">
            <CardDetail />
          </Route>
          <Route path="/registerpage">
            <Registerpage />
          </Route>
          <Route path="loginpage">
            <Loginpage />
          </Route>
          <Route path="contactpage">
            <Contactpage />
          </Route>
          <Route path="aboutus">
            <AboutUs />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}