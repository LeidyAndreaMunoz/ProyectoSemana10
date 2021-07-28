import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './views/Homepage';

export default function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Homepage />
      </Router>

    </div>
  );
}