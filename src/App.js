import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CardsHome from "./Components/cardsHome/Index"
import './App.css';

export default function App() {
  return (
    <div className="App">

      <Router>
        <CardsHome/>
      </Router>

    </div>
  );
}