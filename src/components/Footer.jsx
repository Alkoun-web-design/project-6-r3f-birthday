import '../styles/App.css';
import '../styles/Footer.css';
import NavButton from './NavButton.js';
import {ReactComponent as HomeLogo}from '../images/home.svg';
import {ReactComponent as AboutUsLogo} from '../images/bx_meteor.svg';
import {ReactComponent as ProjectsLogo} from '../images/bx_collection.svg';
import {ReactComponent as ContactUsLogo} from '../images/bx_conversation.svg';
import {ReactComponent as PrivacyPolicyLogo} from "../images/bx_layer.svg";
import Home from './Home.js';
import AboutUs from './AboutUs.jsx';
import Projects from './Projects.js';
import ContactUs from './ContactUs.jsx';
import PrivacyPolicy from './PrivacyPolicy.js';

export default function Footer ({handleNav}) {

    return (
        <footer id="footer">
            <div className="centered">
                <NavButton
                    id="home-btn"
                    btnClass = "Roboto nav-button"
                    title="Home-Button"
                    src={<HomeLogo/>}
                    pClass="nav-text"
                    name="Home"
                    page=<Home/>
                    onClick={handleNav}
                />
                <NavButton
                    id="about-us-btn"
                    btnClass = "Roboto nav-button"
                    title="Aboout-Us-Button"
                    src={<AboutUsLogo/>}
                    pClass="nav-text"
                    name="About Us"
                    page=<AboutUs/>
                    onClick={handleNav}
                />
                <NavButton
                    id="projects-btn"
                    btnClass = "Roboto nav-button"
                    title="Projects-Button"
                    src={<ProjectsLogo/>}
                    pClass="nav-text"
                    name="Projects"
                    page=<Projects/>
                    onClick={handleNav}
                />
                <NavButton
                    id="contact-us-btn"
                    btnClass = "Roboto nav-button"
                    title="Contact-Us-Button"
                    src={<ContactUsLogo/>}
                    pClass="nav-text"
                    name="Contact Us"
                    page=<ContactUs/>
                    onClick={handleNav}
                />
            </div>
                <div className="centered">
                    <NavButton
                        id="privacy-policy-btn"
                        btnClass = "Roboto priv-policy-btn"
                        divClass="pp-logo"
                        title="Privacy-Policy-Button"
                        src={<PrivacyPolicyLogo/>}
                        pClass="pp-text"
                        name="Privacy Policy"
                        page=<PrivacyPolicy/>
                        onClick={handleNav}
                    />
                </div>
        </footer>
    );
}

