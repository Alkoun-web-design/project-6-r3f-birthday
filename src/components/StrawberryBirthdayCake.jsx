import { useGLTF } from "@react-three/drei";

export function StrawberryBirthdayCake(props) {
  const { nodes, materials } = useGLTF('/Strawberry+Birthday+Cake-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cake_Holder.geometry} material={materials['Cake Holder']} position={[0.2, 1.15, 0]} scale={0.2}/>
      <mesh geometry={nodes.Cake.geometry} material={materials.Cake} position={[0.2, 1.41, 0.001]} scale={0.2}/>
      <mesh geometry={nodes.Happy_Birthday_Decoration.geometry} material={materials['Happy Birthday Decoration']} position={[0.2, 1.62, -0.011]} scale={0.2}/>
      {/* <mesh geometry={nodes.Balloons.geometry} material={materials.Balloons} position={[2.184, 2.52, 0.965]} scale={0.2} /> */}
      <mesh geometry={nodes.Birthday_Hats.geometry} material={materials['Birthday Hats']} position={[-1, 0.8, 0.5]} scale={0.2}/>
    </group>
  )
}

useGLTF.preload('/Strawberry+Birthday+Cake-transformed.glb')