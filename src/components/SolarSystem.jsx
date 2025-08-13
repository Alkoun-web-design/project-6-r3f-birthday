import { Canvas } from '@react-three/fiber';
import { Stars, Text3D, Center, PerspectiveCamera, Sky, OrbitControls } from "@react-three/drei";
import { Plate } from './Plate';
import { OldCuriosity } from './OldCuriosity';
import { Plates } from './Plates';
import { CafeMisti } from './CafeMisti';
import { BalloonsModel } from './BalloonsModel';
import { StrawberryBirthdayCake } from './StrawberryBirthdayCake';
// import { CafeModel } from './CafeModel'
import { FrostedCakeModel } from './FrostedCakeModel';


export default function SolarSystem() {
    return (
        // <div className="space_bg">
        <div className="space_bg h-screen w-screen">
          <Canvas shadows>
          <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={50} />
          <Sky sunPosition={0.1} />
          <ambientLight intensity={0.4} />
          <directionalLight castShadow color="white" position={[5, 0, 10]} />
          {/* <directionalLight castShadow color="white" position={[5, 3, 3]} /> */}
          <OrbitControls />
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <ambientLight intensity={1} /> 
              {/* <Stars radius={200} depth={200} count={4000} factor={4} saturation={0} fade speed={1.25} /> */}
              {/* <CafeModel position={[13.5, -4, 2]} rotation={[-1.4, 4.4, 0]}/> */}
              <CafeMisti receiveShadows castShadow position={[4, 8, 1.5]} rotation={[-Math.PI / 2.1, -4.2, 0]}/>
              {/* <EarthModel/> */}
              {/* <BeachModel position={[-5, -8, 2.5]} rotation={[-1.5, 0, 0]}/> */}
              <OldCuriosity position={[-5.5, -16, 4]} rotation={[-1.53, 1, 0]} scale={1.1}/>
              <BalloonsModel castShadow receiveShadows position={[-2.1, 2, 1.3]} rotation={[-1.5, 0, 0]} scale={0.17} color="hotpink"/>
              <FrostedCakeModel castShadow position={[0.6, 4, 0.33]} rotation={[-1.5, 0, 0]} scale={2}/>
              <Plate position={[0.6, 4, 0.36]} rotation={[-1.5, 0, 0]} scale={0.7}/>
              <Plates position={[-0.5, 5, 0.775]} rotation={[-1.5, 0, 0]} scale={0.002}/>
              {/* <CakeModel position={[0, 3.5, 1.3]} rotation={[-1.5, 0, 0]}/> */}
              <Center position={[-1.8, 1, -1]} rotation={[-1.5, 0.3, 0]}>
                <Text3D letterSpacing={-0.03} size={0.2} font={"/Syncopate_Bold.json"}>
                  HAPPIEST BIRTHDAY
                  <meshNormalMaterial />
                </Text3D>
              </Center>
              <Center position={[-1.8, 1, -0.7]} rotation={[-1.5, 0.3, 0]}>
                {/* <Text3D letterSpacing={-0.03} size={0.2} font={"/Syncopate_Bold.json"}>
                  TO MY LIZZY!
                  <meshNormalMaterial />
                </Text3D> */}
                <Text3D letterSpacing={-0.03} size={0.2} font={"/Syncopate_Bold.json"}>
                  TO YOU!
                  <meshNormalMaterial />
                </Text3D>
              </Center>
              {/* <Center position={[0, 1, -0.5]} rotation={[-1.7, 0, 0]}>
                  <Text3D letterSpacing={-0.06} size={0.4} font={"/Syncopate_Bold.json"}>
                      Reach for the Stars
                      <meshNormalMaterial />
                  </Text3D>
              </Center>
              <Center position={[0, 1, 0]} rotation={[-1.7, 0, 0]}>
                  <Text3D letterSpacing={-0.06} size={0.4} font={"/Syncopate_Bold.json"}>
                      and Beyond...
                      <meshNormalMaterial />
                  </Text3D>
              </Center>
               <sphereGeometry args={[2,50,50]}/> */}
              <meshNormalMaterial color="lightblue" rotation={[Math.PI / 2, 0, 0]} />
            </mesh>
          </Canvas>
        </div>
    );
}