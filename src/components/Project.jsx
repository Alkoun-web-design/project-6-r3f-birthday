import '../styles/App.css';
import '../styles/Projects.css';
import {ReactComponent as LinkLogo} from '../images/bx_link-external.svg';
import { Fragment } from 'react';

export default function Project (props) {
    return (
        <Fragment>
            <div className="project-row">
                <h3 id="project-name-0" className="Roboto center project-name">{props.projectName}</h3>
            </div>
            <div className="centered">
                <p className="Roboto">{props.projectDetails}</p>
            </div>
            <div className="project-row">
                <img alt="Project" className="centered project-img-preview" src={props.projectImage1} loading="lazy"/>
                <img alt="Project" className="centered project-img-preview" src={props.projectImage2} loading="lazy"/>
                <img alt="Project" className="centered project-img-preview" src={props.projectImage3} loading="lazy"/>
            </div>
            <div className="project-row">
                <a href={props.projectLink} alt="Website Link" className="Roboto centered">
                    <div className="a">
                        <div className="link-icon" alt="">
                            <LinkLogo/>
                        </div>{props.projectLinkName}
                    </div>
                </a>
            </div>
        </Fragment>
    );
}