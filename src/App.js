import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import {Home} from "./Components/home"
import {About} from "./Components/about"
import {Dashboard} from "./Components/dashboard"


function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/dashboard'>
        <Dashboard />
      </Route>
    </div>
  );
}

export default App;
