import { Fragment } from "react";


export default function PreHeader() {
    return (
        <Fragment>
            <div className="ui-input">
            <label htmlFor="name">Please Enter Your Name</label>
            <input type="text" id="name" name="name" autoComplete="off"/>
            <button id="changeButton">Submit</button>
        </div>
        <div id="error-message">
            <h2 className="Syncopate">We apologize, but you are not authorized.</h2>
        </div>
        </Fragment>
    );
}