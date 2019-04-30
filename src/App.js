import React, {Component} from 'react';
import './App.css';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Library from './Pages/Library';
import { Navbar, Nav } from 'react-bootstrap';
import {BrowserRouter, Route, Link} from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {} from "@fortawesome/free-brands-svg-icons"
import {faHome, faUserCircle, faPodcast} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faUserCircle, faPodcast)



class App extends Component {


render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar className="navBar" bg="dark" variant="dark">
          <Navbar.Brand href="/">Logo</Navbar.Brand>
          <Nav.Link href="/"> 
            <FontAwesomeIcon className="fontAwe" size="2x" icon="home"/>{""}  
          </Nav.Link>
          <Nav.Link href="/about-me"> 
            <FontAwesomeIcon className="fontAwe" size="2x" icon="user-circle"/>{""}  
          </Nav.Link>
          <Nav.Link href="/podcasts"> 
            <FontAwesomeIcon className="fontAwe" size="2x" icon="podcast"/>{""}  
          </Nav.Link>
      </Navbar>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/about-me" render={() => <AboutMe AboytMe={AboutMe} /> } /> 
        <Route exact path="/podcasts" render={() => <Library Library={Library} /> } /> 
    </div>
    </BrowserRouter>
  );
}
}

export default App;
