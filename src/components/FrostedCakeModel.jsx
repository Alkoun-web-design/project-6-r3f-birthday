import { useGLTF } from '@react-three/drei'

export function FrostedCakeModel(props) {
  const { nodes, materials } = useGLTF('/FrostedCake-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Frosted_Cake.geometry} material={materials['Cake PBR']} />
    </group>
  )
}

useGLTF.preload('/FrostedCake-transformed.glb')