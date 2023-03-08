import React, {Component} from "react";
import { Container } from "react-bootstrap";
import syles from './footer.css';
import Logo from '../.././pjtImgs/Logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCamera } from "@fortawesome/free-solid-svg-icons";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Option 1: https://www.devwares.com/docs/contrast/react/components/footer/#:~:text=The%20React%20Bootstrap%205%20Footer,of%20our%20color%20palette%20classes.
const emailIcon = (
    <FontAwesomeIcon icon={faEnvelope}/>
);
const cameraIcon = (
    <FontAwesomeIcon icon={faCamera}/>
);

export class Footer extends React.Component {
    
    render() {
        return (
            <Container className="footerSection">
                <section className="companyLogo">
                    <img
                        src={Logo}
                        alt="Logo"
                    />
                </section>
                <section className="socials">
                    <a className="socialLink" href="mailto:Kennethrc19@student.fdu.edu" title="Email">{ emailIcon }</a>
                    <a className="socialLink" href="https://www.kenneth-s-photos.com/" target="_blank" rel="noopener noreferrer">{ cameraIcon }</a>
                    <a className="socialLink linkedInSocialLink" href="https://www.linkedin.com/in/kenneth-ramirez-castro-260a0598/" target="_blank" rel="noopener noreferrer"><LinkedInIcon></LinkedInIcon></a>
                    
                </section>
                <section className="navigation">
                    
                </section>
                {/* <section className="contactInfo">
                    
                </section> */}
                <section className="copyright">
                    <p>Copyright &copy; Kenneth Ramirez - 2023</p>
                </section>
            </Container>
        )
    }
}