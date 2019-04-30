import React, {Component} from "react"; 
import Footer from "../Components/Footer";
import {Jumbotron, Button} from "react-bootstrap";


class Home extends Component{
   render(){
      return(
         <div className="homeBox">
            <div className="internalHomeBox">
               <Jumbotron className="jumbotron" fluid>
               <h1 className="homeHeader">Sam Vinson</h1>
                  <p>World Wide Niggahs</p>
                  <a href="/about-me"><Button variant="primary">Learn more niggah </Button></a>
               </Jumbotron>
            </div>
         <Footer /> 
         </div>
      )
   }
}

export default Home; 