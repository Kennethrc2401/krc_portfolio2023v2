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
                    <Row className="aboutRow">
                        <h3 className="aboutHeading">About Me</h3>
                    </Row>
                    <Row>
                        <Col className="col-4">
                            <img src={Kenneth_Profile_Photo} alt="Kenneth" className=""/>
                        </Col>
                        <Col className="aboutColumn col-8">
                            <p>Automation & Robotics Laboratory Assistant
                            <br />
                            Fairleigh Dickinson University - GHSCSE,
                                Teaneck, NJ 07666
                            </p>
                            <br />
                            <p className="aboutBio">
                                Overachieving Computer Science Junior, proficient with programming languages used in software engineering 
                                (Python, JAVA,  CSS, C++, and some JavaScript and C#); Nao AI Humanoid Robotics; HTML5 and Front-End Web 
                                Development; Adobe Creative Cloud; and professional sports photography. Completed IBM Accelerate Software 
                                Development Internship. Seeking career in Software Engineering. Possess strong teamwork and training 
                                skills from work as a Lab Assistant and TA. Believe in self-motivated learning. Adept at quickly applying 
                                new skills. Fluent in Spanish and English. Active member of the Association for Computing Machinery (ACM), 
                                and the Institute for Electrical & Electronic Engineers (IEEE).
                            </p>
                        </Col>
                        

                    </Row>
                </Container>
            


        )};
}
