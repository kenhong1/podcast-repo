import React, {Component} from "react"; 
import Footer from "../Components/Footer";
import main from "../images/main.jpeg"; 
import SocialMedia from "../Pages/SocialMedia"
import {Jumbotron, Button, Card, Row, Container, Col} from "react-bootstrap";


class Home extends Component{
   render(){
      return(
         <div className="homeBox">
            <div className="internalHomeBox">
               <Jumbotron className="jumbotron" fluid>
               <img src={main} />

               </Jumbotron>
               <Container>
                  <Row>
                     <Col>
                        <Card style={{ width: '20rem' }}>   
                        <Card.Img variant="top" src="holder.js/100px180" />
                              <Card.Body>
                                 <Card.Title>About Me </Card.Title>
                                 <Card.Text>
                                    Get to know who I am and what I do. 
                                 </Card.Text>
                                 <a href="about-me"><Button variant="primary">Go somewhere</Button> </a> 
                              </Card.Body>
                        </Card>
                     </Col>
                     <Col>
                        <Card style={{ width: '20rem' }}>   
                           <Card.Img variant="top" src="holder.js/100px180" />
                              <Card.Body>
                              <Card.Title>Podcasts</Card.Title>
                              <Card.Text>
                                 Listen to my latest podcasts here! 
                              </Card.Text>
                              <Button variant="primary">Go somewhere</Button>
                              </Card.Body>
                        </Card>
                     </Col>
                     <Col>
                        <Card style={{ width: '20rem' }}>   
                           <Card.Img variant="top" src="holder.js/100px180" />
                              <Card.Body>
                                 <Card.Title>Social Media </Card.Title>
                                 <Card.Text>
                                    Get Connected with me through my media channels! 
                                 </Card.Text>
                                 <a href="social-media"> <Button variant="primary"> Click </Button> </a> 
                              </Card.Body>
                        </Card>
                     </Col>
                  </Row>
               </Container>
            </div>
            <div id="footerDiv">
               {/* <Footer />  */}
            </div>
         </div>
      )
   }
}

export default Home; 