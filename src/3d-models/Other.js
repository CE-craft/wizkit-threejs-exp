import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { connect } from "react-redux";
import * as THREE from "three";

const Other = (props) => {
  const otherMesh = useRef();
  const { nodes, materials } = useGLTF("/other-box.glb");
  //useEffect(() => {}, [meshObject]);

  const target = new THREE.Vector3(40.5, -0.5, -10);
  const mainPos = new THREE.Vector3(50, 0, -12);

  useFrame(() => {
    if (props.hovered === "other") {
      otherMesh.current.position.lerp(target, 0.1);
    } else {
      otherMesh.current.position.lerp(mainPos, 0.03);
    }
  });

  return (
    // <>
    //   <mesh name="other" ref={otherMesh} castShadow position={[50, 0, -12]}>
    //     <sphereBufferGeometry />
    //     <meshStandardMaterial color={`blue`} />
    //   </mesh>
    // </>

    <group ref={otherMesh} {...props} dispose={null} position={[50, 0, -12]}>
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials["Material.001"]}
        position={[0, 0.4, 0.05]}
      >
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={nodes.Cube001_1.material}
          position={[0, 0.04, 0.1]}
        />
        <mesh
          geometry={nodes.Cube002.geometry}
          material={nodes.Cube002.material}
          position={[0, -0.05, 0.1]}
        />
        <mesh
          geometry={nodes.Cube003.geometry}
          material={nodes.Cube003.material}
          position={[0.12, -0.14, -0.05]}
        />
        <mesh
          geometry={nodes.Cube004.geometry}
          material={nodes.Cube004.material}
          position={[0, -0.14, -0.16]}
        />
        <mesh
          geometry={nodes.Cube005.geometry}
          material={nodes.Cube005.material}
          position={[-0.12, -0.14, -0.05]}
        />
        <mesh
          geometry={nodes.Cube006.geometry}
          material={nodes.Cube006.material}
          position={[0, -0.14, 0.05]}
        />
        <mesh
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
          position={[-0.14, -0.29, 0.05]}
        />
        <mesh
          geometry={nodes.Cylinder001.geometry}
          material={nodes.Cylinder001.material}
          position={[0.14, -0.29, 0.05]}
        />
        <mesh
          geometry={nodes.Cylinder002.geometry}
          material={nodes.Cylinder002.material}
          position={[-0.14, -0.29, -0.16]}
        />
        <mesh
          geometry={nodes.Cylinder003.geometry}
          material={nodes.Cylinder003.material}
          position={[0.14, -0.29, -0.16]}
        />
        <mesh
          geometry={nodes.Cylinder004.geometry}
          material={nodes.Cylinder004.material}
          position={[0, 0.04, 0.11]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0, 0.01, 0]}
        />
        <mesh
          geometry={nodes.Cylinder005.geometry}
          material={nodes.Cylinder005.material}
          position={[0, -0.04, 0.11]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0, 0.01, 0]}
        />
        <mesh
          geometry={nodes.Sphere.geometry}
          material={nodes.Sphere.material}
          position={[0, 0.04, 0.11]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.01, 0.01, 0.01]}
        />
        <mesh
          geometry={nodes.Sphere001.geometry}
          material={nodes.Sphere001.material}
          position={[0, -0.04, 0.11]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.01, 0.01, 0.01]}
        />
      </mesh>
    </group>
  );
};

useGLTF.preload("/other-box.glb");

const mapStateToProps = (state) => ({
  hovered: state.hovered,
});

export default connect(mapStateToProps)(Other);
