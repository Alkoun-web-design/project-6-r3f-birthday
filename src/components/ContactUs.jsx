import '../styles/App.css'
import '../styles/ContactForm.css';
import {ReactComponent as SendLogo} from '../images/bx_mail-send.svg';

export default function ContactForm () {
    return (
        <div id="contact-us">
            <div className="content-box">
                <h2 className="Syncopate page-title">Contact Us</h2>
                <form name="alkoun-contact-form" netlify="true">
                    <div className="content-section">
                        <div id="form">
                            <div className="form-column">
                                <div className="form-row">
                                    <div className="left">
                                        <label className="Roboto" htmlFor="name">Name:</label>
                                    </div>    
                                    <div className="centered">
                                        <input className="Roboto" placeholder="Enter your Name here." type="text" id="name" name="user_name" required/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="left">
                                        <label className="Roboto" htmlFor="mail">E-mail:</label>
                                    </div>
                                    <div className="centered">
                                        <input className="Roboto" placeholder="Enter your Email here." type="email" id="email" name="user_email" required/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="left">
                                        <label className="Roboto" htmlFor="subject">Subject:</label>
                                    </div>
                                    <div className="centered">
                                        <input className="Roboto" placeholder="Enter the Subject of your message." type="text" id="subject" name="email_subject" required/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-column">
                                <div className="form-row">
                                    <div className="left">
                                        <label className="Roboto" htmlFor="message">Message:</label>
                                    </div>
                                    <div className="centered">
                                        <textarea className="Roboto" rows="5" placeholder="Enter your Message here." id="message" name="user_message" required></textarea>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div className="centered">
                            <button className="Roboto form-btn" type="submit"><div className="button"><p className="form-btn-txt">Send Message</p><div className="form-btn-icn"><SendLogo/></div></div></button>
                            <p className="Roboto"><small>(Powered by Un-static Forms)</small></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}