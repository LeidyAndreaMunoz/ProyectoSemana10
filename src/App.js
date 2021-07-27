import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import CardDetail from './components/CardDetail';
import './App.css';

export default function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <CardDetail />
      </Router>

    </div>
  );
}