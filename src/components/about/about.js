import React, {Component} from "react";
import styles from './about.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Kenneth_Profile_Photo from '../../images/profilePhoto/Kenneth_Profile_Photo.jpg';
import { Col } from "react-bootstrap";

export class About extends Component {
        render () {
            return (
                <Container 
                fluid={true}
                className="aboutSection"
                style={{alignContent: 'space-evenly'}}
                > 
                    {/* <div style={{display: 'block'}}>
                        <h3 className="aboutHeading">About Me</h3>
                    </div>
                    <div style={{display: 'block'}}>
                        <img src={Kenneth_Profile_Photo} alt="Kenneth"/>
                    </div>
                    <div className="aboutBio">
                    <p>Robotics Lab Assistant</p>
                    <p>Fairleigh Dickinson University - GHSCSE,
                        Teaneck, NJ 07666
                    </p>
                    <p className="aboutBio">Overachieving computer science student with a strong belief in self-motivated learning. 
                    Adept at quickly learning and applying new skills. Strong teamwork and training skills. Fluent in Spanish and 
                    English. Proficient with Python, robotics, Front-End Web Development, Microsoft Office, and photography. Seeking 
                    CS careers in Frontend Web and Software Development, and Robotics.
                    </p>
                    </div> */}
                    <Row className="aboutRow">
                        <h3 className="aboutHeading">About Me</h3>
                    </Row>
                    <Row>
                        <Col className="col-4">
                            <img src={Kenneth_Profile_Photo} alt="Kenneth" className=""/>
                        </Col>
                        <Col className="aboutColumn col-8">
                            <p>Robotics Lab Assistant</p>
                            <p>Fairleigh Dickinson University - GHSCSE,
                                Teaneck, NJ 07666
                            </p>
                            <p className="aboutBio">Overachieving computer science student with a strong belief in self-motivated learning.
                            Adept at quickly learning and applying new skills. Strong teamwork and training skills. Fluent in Spanish and
                            English. Proficient with Python, robotics, Front-End Web Development, Microsoft Office, and photography. Seeking
                            CS careers in Frontend Web and Software Development, and Robotics.
                            </p>
                        </Col>
                        

                    </Row>
                </Container>
            


        )};
}
