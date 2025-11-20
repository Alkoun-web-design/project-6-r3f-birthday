import { useRef, useState } from 'react';
import './App.css';
// import SolarSystem from './components/SolarSystem.jsx';
// import Main from './Main'
// import BirthdayScene from './components/BirthdayScene.jsx';
import BirthdayScene2 from './components/BirthdayScene2.jsx';
import Footer from './components/Footer.jsx';

export default function App() {

  const [name, setName] = useState('YOU')

  const inputRef = useRef(null)
  const musicRef = useRef(null);

  return (
    <div className='text-gray-100'>
      <div className='absolute z-10 left-4 '>
        <input className='mt-4 p-1 bg-[#00000087] w-auto' ref={inputRef} placeholder='Wish someone...' onChange={() => {inputRef.current.value.length < 12 ? setName(inputRef.current.value) : null}}></input>
      </div>
      {/* <SolarSystem /> */}
      {/* <BirthdayScene /> */}
      <BirthdayScene2 musicRef={musicRef} name={name}/>
      {/* <audio id="music" className="fixed top-0 left-0 z-20" controls src="/Dido - Thank You.mp3" type="audio/mpeg"></audio>  */}
      <audio ref={musicRef} className="fixed top-0 left-0 z-10" src="/12. Champagne Supernova.mp3" type="audio/mpeg"></audio> 
      <Footer />
    </div>
  );
}