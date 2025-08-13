import '../styles/App.css';
import '../styles/AboutUs.css';
import ApiComponent from './ApiComponent.js';

export default function AboutUs () {
    return (
        <div id="about-us">
            <div className="content-box">
                <h2 className="Syncopate page-title">About Us</h2>
                <div className="content-section Roboto">
                    <p>Hi, My name is Hassam Sajid and I am a Web Designer and Developer.  
                    My journey started as a lawyer in Pakistan, located in the South Asian 
                    continent next to India and Afghanistan. Life as a lawyer was not as satisfying
                     as I hoped it would be, and so right in the middle of a Covid-19 Lockdown in early May 2020, 
                     I decided to try out a web development course.</p>
                    <p>Since that time, I have not looked back.</p>
                    <ApiComponent/>
                </div>
                
            </div>
        </div>
    );
}