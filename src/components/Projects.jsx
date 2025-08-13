import '../styles/Projects.css';
import '../styles/App.css';
import Project from './Project.jsx';
import cwiImage1 from '../images/Iqra2.webp';
import cwiImage2 from '../images/Iqra1.webp';
import cwiImage3 from '../images/Iqra3.webp';
import ssiImage1 from '../images/SSI-min.webp';

export default function Projects () {
    return (
        <div id="projects">
            <div className="content-box">
                <h2 className="Syncopate page-title">Projects</h2>
                <div className="content-section">
                    <Project 
                        projectName="Counseling With Iqra"
                        projectLink="https://counselingwithiqra.netlify.app"
                        projectLinkName="counselingwithiqra.netlify.app"
                        projectImage1={cwiImage1}
                        projectImage2={cwiImage2}
                        projectImage3={cwiImage3}
                        projectDetails="Our first project was a blog and business website for Psychologist and 
                        Therapist, Iqra Naz. The client wanted a professional website for her mental counselling
                         services with a blogging platform.<br/>The first iteration was built purely on HTML, CSS
                        and JavaScript, and then merged as a 'theme' using PHP with the Wordpress platform for 
                        the client's blogging needs.<br/>After educating myself in User Interface (UI), the design 
                        felt dated and was updated using the Divi plugin in conjunction with the Wordpress platform
                         to focus on following UI principles.<br/>However the client later required a more cost 
                         effective solution, without the charges of a domain and hosting service. This provided the 
                         opportunity to use a Static Site Generator (SSG) called Eleventy for the fastest builds 
                         possible, and create templates for a blogging platform using Nunjucks, along with Decap CMS 
                         as the Content Management System (CMS) for the client. The files were then hosted on Github 
                         and deployed using Netlify."
                    />
                    <Project 
                        projectName="Stellar Services International"
                        projectLink="https://stellarservices.international"
                        projectLinkName="stellarservices.international"
                        projectImage1={ssiImage1}
                        projectImage2={ssiImage1}
                        projectImage3={ssiImage1}
                        projectDetails="Our second project involved an outsouring drafting company, Steallar Services International. 
                        The website was built on the Wordpress platform, by implementing the Divi Builder to emphasize the a 
                        modern UI that is appealing aswell. The website design is minimalistic and the Wordpress platform allows the 
                        administrators easy of maintenance, and content editing."
                    />
                </div>   
            </div>    
        </div>
    );
}