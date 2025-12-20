import { Canvas } from '@react-three/fiber';
import { Text3D, Center, PerspectiveCamera, Sky, OrbitControls, Loader, Html } from "@react-three/drei";
import { Plate } from './Plate';
import { Plates } from './Plates';
import { BalloonsModel } from './BalloonsModel';
// import { StrawberryBirthdayCake } from './StrawberryBirthdayCake';
// import { FrostedCakeModel } from './FrostedCakeModel';
import { PinkCake } from './PinkCake';
import { WoodenFloor2 } from './WoodenFloor2';
import { TablesAndChairs } from './TablesAndChairs'
import { CoffeeShopCup } from './CoffeeShopCup'
import { SmartPhone} from './SmartPhone'
import { Fork } from './Fork'
import { BoseSmartSpeaker } from './BoseSmartSpeaker';
import { EffectComposer } from '@react-three/postprocessing'
import { PicnicTable } from './PicnicTable';
import { GrassLowPoly } from './GrassLowPoly';
import Sakura from './Sakura';


export default function BirthdayScene3({musicRef, name}) {

    return (
        <div className="space_bg h-screen w-screen">
          <Canvas shadows>

            {/* <OrbitControls /> */}
            
            {/* <PerspectiveCamera makeDefault position={[-0.075, 5.8, 0.3]} rotation={[-1.5, 0, 0]} fov={20} /> */}
            <PerspectiveCamera makeDefault position={[-0.075, 5.8, 1.4]} rotation={[-1.3, 0, 0]} fov={30} />
            
            <Sky sunPosition={[0.1, 0.2, 0.1]} />
            {/* <fog attach="fog" args={['white', 10, 25]} /> */}
            
            <ambientLight intensity={0.3} />
            <directionalLight
              castShadow
              position={[10, 10, 5]}
              intensity={4}
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />
            
            <directionalLight
              position={[-10, 10, -5]}
              intensity={0.5}
              color="#ffe4b3"
            />
            
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              {/* <WoodenFloor2 receiveShadow position={[-2.39, -2, 0]}/> */}
              <GrassLowPoly receiveShadow position={[-0.52, -1, 0]} rotation={[-1.55, 0, 0]} scale={2.75}/>
              
              {/* <TablesAndChairs castShadow receiveShadow position={[-6.7, 2.6, 1]} rotation={[-1.57, 0, 0]} /> */}
              <PicnicTable castShadow receiveShadow position={[0, 0, -0.05]} rotation={[-1.57, 1.58, 0]} scale={0.5}/>
              
              <BalloonsModel 
                castShadow 
                receiveShadow 
                position={[0.8, -0.7, -1.055]} 
                rotation={[-1.5, 2, 0]} 
                scale={0.17}
              >
                <meshStandardMaterial color="red" />
              </BalloonsModel>
              
              <BalloonsModel 
                castShadow 
                receiveShadow 
                position={[-1, -0.5, -1.055]} 
                rotation={[-1.5, 4, 0]} 
                scale={0.17}
              >
                <meshStandardMaterial color="#42a5f5" /> {/* Blue balloon */}
              </BalloonsModel>
              <Sakura receiveShadow position={[2, -4.5, 0]} rotation={[-1.55, 0, 0]} scale={0.75}/>

              <BoseSmartSpeaker musicRef={musicRef} castShadow receiveShadow position={[0.25, -0.4, -1.05]} rotation={[-1.57, 3, 0]}/>
              <SmartPhone castShadow receiveShadow position={[-0.25, -0.3, -0.97]} rotation={[-3.075, 0.77, 1.5]} scale={0.3}/>
              {/* <StrawberryBirthdayCake castShadow position={[-0.1, -0.1, -1.07]} rotation={[-1.57, 3, 0]} scale={0.1}/> */}
              <PinkCake castShadow position={[-0.1, -0.08, -1.28]} rotation={[-1.57, -1.55, 0]} scale={0.045}/>
              <Plate castShadow receiveShadow position={[-0.1, -0.1, -1.05]} rotation={[-1.57, 0, 0]} scale={0.7}/>
              <Plates castShadow position={[0.1, 0.7, -1.055]} rotation={[-1.55, 1.2, 0]} scale={0.0018}/>
              {/* <Fork castShadow position={[0.1, 0.45, -1.06]} rotation={[-1.55, 1.2, 0]}/> */}
              
              <CoffeeShopCup castShadow position={[0.18, 0.1, -1.055]} rotation={[-1.55, 1.5, 0]} scale={0.1}/>
              <CoffeeShopCup castShadow position={[0.14, -0.8, -1.055]} rotation={[-1.55, 1.2, 0]} scale={0.1}/>
              <CoffeeShopCup castShadow position={[-0.22, -0.8, -1.055]} rotation={[-1.55, -1.7, 0]} scale={0.1}/>
              <CoffeeShopCup castShadow position={[-0.3, -0.4, -1.055]} rotation={[-1.55, -0.8, 0]} scale={0.1}/>
              <CoffeeShopCup castShadow position={[-0.25, 0.3, -1.055]} rotation={[-1.55, -1.9, 0]} scale={0.1}/>
                <CoffeeShopCup castShadow position={[0.2, 0.3, -1.055]} rotation={[-1.55, 1.8, 0]} scale={0.1}/>

              <Center position={[-0.075, -0.65, -1.1]} rotation={[-2.7, 0, 0]}>
                <Text3D letterSpacing={0.0001} size={0.04} font={"/Syncopate_Bold.json"}>
                  HAPPIEST BIRTHDAY
                  {/* <meshStandardMaterial color="#e3242b" /> */}
                  <meshStandardMaterial color="white" />
                </Text3D>
              </Center>
              <Center className='mx-auto' position={[-0.075, -0.6, -1.1]} rotation={[-2.7, 0, 0]}>
                <Text3D letterSpacing={0.0001} size={0.04} font={"/Syncopate_Bold.json"}>
                  TO {name}!
                  <meshStandardMaterial color="white" />
                </Text3D>
              </Center>
            </mesh>
          </Canvas>
          <Loader />
        </div>
    );
}