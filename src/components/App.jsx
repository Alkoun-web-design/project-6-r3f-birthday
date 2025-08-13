import '../styles/App.css';
import SolarSystem from './SolarSystem.js';
import { Fragment } from "react";
// import Main from './Main'


export default function App() {
  return (
    <Fragment>
        <SolarSystem />
        <audio id="music" controls src="../aud/Dido - Thank You.mp3" type="audio/mpeg">
                </audio> 
        {/* <Main /> */}
    </Fragment>
  );
}