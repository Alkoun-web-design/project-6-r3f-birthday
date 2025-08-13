
import { useGLTF } from "@react-three/drei"
export function CafeMisti(props) {
  const { nodes, materials } = useGLTF('/cafe-misti-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.Abstract_Blue_Square} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} />
      <mesh geometry={nodes.Object_3.geometry} material={materials.Base} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} />
      {/* <mesh geometry={nodes.Object_5.geometry} material={materials.Body_Black_1} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} /> */}
      <mesh geometry={nodes.Object_6.geometry} material={materials.PaletteMaterial001} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} />
      {/* <mesh geometry={nodes.Object_8.geometry} material={materials.PaletteMaterial002} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} /> */}
      <mesh geometry={nodes.Object_9.geometry} material={materials.Material_1} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} />
      {/* <mesh geometry={nodes.Object_13.geometry} material={materials.No_12} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} /> */}
      {/* <mesh geometry={nodes.Object_14.geometry} material={materials.No_34} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} /> */}
      {/* <mesh geometry={nodes.Object_15.geometry} material={materials.No_68} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} /> */}
      {/* <mesh geometry={nodes.Object_16.geometry} material={materials.PENNY_TILE} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} /> */}
      {/* <mesh geometry={nodes.Object_18.geometry} material={materials.PaletteMaterial003} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} /> */}
      {/* <mesh geometry={nodes.Object_29.geometry} material={materials.PaletteMaterial004} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} /> */}
      {/* <mesh geometry={nodes.Object_30.geometry} material={materials.Asphalt_C01_100cm} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} /> */}
      {/* <mesh geometry={nodes.Object_31.geometry} material={materials.CONC_LIGHT} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} /> */}
      <mesh geometry={nodes.Object_32.geometry} material={materials.Fabric_B01_20cm} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} />
      <mesh geometry={nodes.Object_33.geometry} material={materials.Fabric_C01_20cm} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} />
      {/* <mesh geometry={nodes.Object_38.geometry} material={materials.Grass_A_200cm} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} /> */}
      {/* <mesh geometry={nodes.Object_39.geometry} material={materials.Paper_A_20cm} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} /> */}
      <mesh geometry={nodes.Object_40.geometry} material={materials.PaletteMaterial005} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} />
      {/* <mesh geometry={nodes.Object_42.geometry} material={materials.Soil_B01_200cm} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} /> */}
      {/* <mesh geometry={nodes.Object_43.geometry} material={materials.Stone_E_150cm} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} /> */}
      {/* <mesh geometry={nodes.Object_44.geometry} material={materials.Tiles_G_200cm} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} /> */}
      <mesh geometry={nodes.Object_45.geometry} material={materials.Tiles_L01_2m} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} />
      <mesh geometry={nodes.Object_46.geometry} material={materials.Veneer_D02_120cm} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} />
      {/* <mesh geometry={nodes.Object_49.geometry} material={materials.coffeecover} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} /> */}
      <mesh geometry={nodes.Object_50.geometry} material={materials.PaletteMaterial006} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} />
      {/* <mesh geometry={nodes.Object_51.geometry} material={materials.PaletteMaterial007} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} /> */}
      {/* <mesh geometry={nodes.Object_52.geometry} material={materials.il_fullxfull_1123419681_6ucv} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} /> */}
      {/* <mesh geometry={nodes.Object_54.geometry} material={materials.menu} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} /> */}
    </group>
  )
}

useGLTF.preload('/cafe-misti-transformed.glb')