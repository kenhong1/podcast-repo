import React, {Component} from "react"; 
import Footer from "../Components/Footer";
import {Jumbotron, Button, Card, Row, Container, Col} from "react-bootstrap";


class Home extends Component{
   render(){
      return(
         <div className="homeBox">
            <div className="internalHomeBox">
               <Jumbotron className="jumbotron" fluid>
               <h1 className="homeHeader">Sam Vinson</h1>
                  <p>World Wide Niggahs</p>
                  <p> stuff that goes here </p>
                  <a href="/about-me"><Button variant="primary">Learn more niggah </Button></a>
               </Jumbotron>
               <Container>
                  <Row>
                     <Col>
                        <Card style={{ width: '20rem' }}>   
                        <Card.Img variant="top" src="holder.js/100px180" />
                              <Card.Body>
                                 <Card.Title>Card Title</Card.Title>
                                 <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                 </Card.Text>
                                 <Button variant="primary">Go somewhere</Button>
                              </Card.Body>
                        </Card>
                     </Col>
                     <Col>
                        <Card style={{ width: '20rem' }}>   
                           <Card.Img variant="top" src="holder.js/100px180" />
                              <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                              <Card.Text>
                                 Some quick example text to build on the card title and make up the bulk of
                                 the card's content.
                              </Card.Text>
                              <Button variant="primary">Go somewhere</Button>
                              </Card.Body>
                        </Card>
                     </Col>
                     <Col>
                        <Card style={{ width: '20rem' }}>   
                           <Card.Img variant="top" src="holder.js/100px180" />
                              <Card.Body>
                                 <Card.Title>Card Title</Card.Title>
                                 <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                 </Card.Text>
                                 <Button variant="primary">Go somewhere</Button>
                              </Card.Body>
                        </Card>
                     </Col>
                  </Row>
               </Container>
            </div>
         <Footer /> 
         </div>
      )
   }
}

export default Home; 