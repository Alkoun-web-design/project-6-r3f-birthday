import '../styles/App.css';
import '../styles/PrivacyPolicy.css'

export default function PrivacyPolicy () {
    return (
        <div id="privacy-policy">
            <div className="content-box">
                <h2 className="Syncopate page-title">Privacy Policy</h2>
                <div className="content-section Roboto">
                    <p>Our Privacy Policy is straight forward, we do not collect any of our client's
                        personal data, other than the Messages and Emails sent to Alkoun Web Designs. 
                        These Emails and Messages will only be stored for the purposes of future
                        correspondence. However, none of that data will be used for any other purpose, 
                        except for, and only for the reasons of making future correspondence with the
                        sender of the message more convenient.
                    </p>
                    <p>If there is anything else you would like to understand, or would require
                        clarifications regarding the retention or use of any information or data 
                        as regards to our privacy policy, please feel free to contact us.
                    </p>
                </div>
            </div>
        </div>
    );
}