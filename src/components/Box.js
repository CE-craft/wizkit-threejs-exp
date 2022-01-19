import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

const Box = (props) => {
  const meshObject = useRef();

  const { nodes, materials } = useGLTF("/chair-light.glb");

  //const [mouseDown, setMouse] = useState(false);
  let modelRotation;

  useEffect(() => {
    modelRotation = meshObject.current;
    // console.log(modelRotation);
  }, [meshObject]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.elapsedTime;
    modelRotation.rotation.y = elapsedTime / 3;
  });

  return (
    // <>
    //   <mesh ref={meshObject} castShadow position={[2, 0, 2]}>
    //     <boxBufferGeometry />
    //     <meshStandardMaterial color={`#666666`} />
    //   </mesh>
    // </>
    <group ref={meshObject} {...props} dispose={null} position={[0.8, -0.5, 5]}>
      <mesh
        geometry={nodes.Boomerang_Chair_Seat.geometry}
        material={materials.BoomerangChair_Fabric01}
        rotation={[-0.14, 0, 0]}
      >
        <mesh
          geometry={nodes.Boomerang_Chair_Arms.geometry}
          material={nodes.Boomerang_Chair_Arms.material}
          rotation={[0.01, 0, 0]}
        />
        <mesh
          geometry={nodes.Boomerang_Chair_Back.geometry}
          material={materials["BoomerangChair_Fabric02.001"]}
          rotation={[1.31, 0, 0]}
        />
        <group rotation={[0.14, 0, 0]}>
          <mesh
            geometry={nodes.Cylinder002.geometry}
            material={materials.BoomerangChair_ChairlegSteel}
          />
          <mesh
            geometry={nodes.Cylinder002_1.geometry}
            material={materials.BoomerangChair_Chairlegcap}
          />
        </group>
        <mesh
          geometry={nodes.Boomerang_Chair_Slat1.geometry}
          material={nodes.Boomerang_Chair_Slat1.material}
          rotation={[0.02, 0, 0]}
        />
        <mesh
          geometry={nodes.Boomerang_Chair_Slat2.geometry}
          material={nodes.Boomerang_Chair_Slat2.material}
          rotation={[0.02, 0, 0]}
        />
        <mesh
          geometry={nodes.Boomerang_Chair_Slat3.geometry}
          material={nodes.Boomerang_Chair_Slat3.material}
          rotation={[1.25, 0, 0]}
        />
        <mesh
          geometry={nodes.Boomerang_Chair_Supports1.geometry}
          material={nodes.Boomerang_Chair_Supports1.material}
          rotation={[0.14, 0, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Boomerang_Chair_Supports2.geometry}
          material={nodes.Boomerang_Chair_Supports2.material}
          rotation={[1.72, 0, -Math.PI / 2]}
        />
      </mesh>
    </group>
  );
};

export default Box;
