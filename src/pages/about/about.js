import React, {Component} from "react";
import styles from './about.css';

export class About extends Component {
        render () {
            return (
                <div className="aoutSection">
                    <h3 className="aboutHeading">About Me</h3>
                    <img src="http://placehold.it/" alt="Kenneth"/>
                    <p>Robotics Lab Assistant</p>
                    <p>Fairleigh Dickinson University - GHSCSE,
                        Teaneck, NJ 07666
                    </p>
                    <p className="aboutBio">
                        Overachieving Computer Science Senior, proficient with programming 
                        languages used in software engineering (Python, JAVA,  CSS, C++, 
                        and some JavaScript and C#); Nao AI Humanoid Robotics; HTML5 and 
                        Front-End Web Development; Adobe Creative Cloud; and professional 
                        sports photography. Completed IBM Accelerate Software Development 
                        Internship. Seeking career in Software Engineering. Possess strong 
                        teamwork and training skills from work as a Lab Assistant and TA. 
                        Believe in initiative-taking learning. Adept at quickly applying 
                        new skills. Fluent in Spanish and English. Active member of the 
                        Institute for Electrical & Electronic Engineers (IEEE).
                    </p>
                </div>



        )};
}
