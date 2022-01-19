import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { connect } from "react-redux";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

const Chair = (props) => {
  const chairMesh = useRef();
  const { nodes, materials } = useGLTF("/chair-light.glb");

  const target = new THREE.Vector3(40.5, -0.5, -10);
  const mainPos = new THREE.Vector3(50, 0, -12);

  //useEffect(() => {}, [meshObject]);

  useFrame((state) => {
    //console.log(state);
    if (props.hovered === "chairs") {
      chairMesh.current.position.lerp(target, 0.1);
    } else {
      chairMesh.current.position.lerp(mainPos, 0.03);
    }
  });

  // return (
  //   <>
  //     <mesh name="chair" ref={chairMesh} castShadow position={[50, 0, -12]}>
  //       <boxBufferGeometry />
  //       <meshStandardMaterial color={`green`} />
  //     </mesh>
  //   </>
  // );

  return (
    <group ref={chairMesh} {...props} dispose={null} position={[50, 0, -10]}>
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

useGLTF.preload("/chair-light.glb");

const mapStateToProps = (state) => ({
  hovered: state.hovered,
});

export default connect(mapStateToProps)(Chair);
