import React from 'react';
import './App.css';
// import SolarSystem from './components/SolarSystem.jsx';
// import Main from './Main'
// import BirthdayScene from './components/BirthdayScene.jsx';
// import BirthdayScene2 from './components/BirthdayScene2.jsx';
import BirthdayScene3 from './components/BirthdayScene3.jsx';
import Footer from './components/Footer.jsx';
import { InputIcon } from './components/Icons.jsx';
import ParkScene from './components/ParkScene.jsx';
export default function App() {

  const inputRef = React.useRef(null)
  const musicRef = React.useRef(null);

  const [name, setName] = React.useState('YOU');
  // const [scene, setScene] = React.useState(<BirthdayScene musicRef={musicRef} name={name}/>)

  function handleNameChange() {
    inputRef.current.value.length < 12 ? setName(inputRef.current.value) : null;
    document.title = `Happy Birthday ${inputRef.current.value}!`;
  };

  return (
    <div className='text-gray-100'>
      <div className='absolute z-10 left-4 '>
        <InputIcon/><input className='mt-4 p-1 bg-[#00000087] w-auto' ref={inputRef} placeholder='Wish someone...' onChange={handleNameChange}></input>
      </div>
      {/* <SolarSystem /> */}
      {/* <BirthdayScene /> */}
      {/* <BirthdayScene2 musicRef={musicRef} name={name} /> */}
      <BirthdayScene3 musicRef={musicRef} name={name} />
      {/* {scene} */}
      {/* <audio id="music" className="fixed top-0 left-0 z-20" controls src="/Dido - Thank You.mp3" type="audio/mpeg"></audio>  */}
      <audio ref={musicRef} className="fixed top-0 left-0 z-10" src="/12. Champagne Supernova.mp3" type="audio/mpeg"></audio> 
      <Footer />
    </div>
  );
}