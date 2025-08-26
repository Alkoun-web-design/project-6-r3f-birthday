import { useRef } from 'react';
import './App.css';
// import SolarSystem from './components/SolarSystem.jsx';
// import Main from './Main'
// import BirthdayScene from './components/BirthdayScene.jsx';
import BirthdayScene2 from './components/BirthdayScene2.jsx';

export default function App() {

  const musicRef = useRef(null);

  return (
    <div>
      {/* <SolarSystem /> */}
      {/* <BirthdayScene /> */}
      <BirthdayScene2 musicRef={musicRef} />
      {/* <audio id="music" className="fixed top-0 left-0 z-20" controls src="/Dido - Thank You.mp3" type="audio/mpeg"></audio>  */}
      <audio ref={musicRef} className="fixed top-0 left-0 z-20" src="/12. Champagne Supernova.mp3" type="audio/mpeg"></audio> 

      {/* <Main /> */}
    </div>
  );
}