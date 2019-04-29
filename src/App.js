import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, nav, Link} from "react-router-dom"
import './App.css';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Library from './Pages/Library';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/about-me"> About </Link>
        <Link to="/podcasts"> Podcasts</Link>
      </nav>
      <Route exact path="/" component={Home} /> 
      <Route exact path="/about-me" component={AboutMe} /> 
      <Route exact path="/podcasts" component={Library} />
    </div>
    </BrowserRouter>
  );
}

export default App;
