import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export function BalloonsModel(props) {
  const { nodes, materials } = useGLTF('/balloons-transformed.glb')
  const balloonGroupOne = useRef()
  const balloonGroupTwo = useRef()

  useFrame((state, delta) => {
    // balloonGroupOne.current.rotation.x += 0.2 * delta
    // balloonGroupTwo.current.rotation.y += 0.1 * delta
    const time = state.clock.getElapsedTime()
  
    // Subtle up-and-down movement
    balloonGroupOne.current.position.y = Math.sin(time * 2) * 0.1
    
    // Slight swaying from side to side
    balloonGroupOne.current.position.x = Math.sin(time * 1) * 0.1
    balloonGroupOne.current.position.z = Math.cos(time * 1) * 0.1
    
    // Gentle rotation
    balloonGroupOne.current.rotation.x = Math.sin(time * 0.2) * 0.1
    balloonGroupOne.current.rotation.z = Math.cos(time * 0.2) * 0.1

    balloonGroupTwo.current.position.y = Math.sin(time * 0.8) * 0.1
    
    balloonGroupTwo.current.position.x = Math.sin(time * 1.2) * 0.1
    balloonGroupTwo.current.position.z = Math.cos(time * 1.2) * 0.1
    


})

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Sphere002.geometry} material={materials.baloon} position={[0.427, 7.338, 1.258]} rotation={[0.099, 0.297, -0.334]} scale={0.574} />
      <instancedMesh ref={balloonGroupOne} args={[nodes.Sphere006.geometry, materials.baloon, 6]} instanceMatrix={nodes.Sphere006.instanceMatrix} />
      <instancedMesh ref={balloonGroupTwo} args={[nodes.Sphere001.geometry, materials.baloon, 5]} instanceMatrix={nodes.Sphere001.instanceMatrix} />
    </group>
  )
}

useGLTF.preload('/balloons-transformed.glb')
