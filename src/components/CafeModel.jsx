import { useGLTF } from '@react-three/drei'

export function CafeModel(props) {
  const { nodes, materials } = useGLTF('/cafe-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.base_bar001.geometry} material={materials.base_bar} />
    </group>
  )
}

useGLTF.preload('/cafe-transformed.glb')  

