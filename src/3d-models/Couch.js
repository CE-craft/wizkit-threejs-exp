import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { connect } from "react-redux";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Couch = (props) => {
  //console.log(meshObject);
  // useEffect(() => {
  //   if (props.hovered === "couches") {
  //     meshObject.position.set(40, 0, -12);
  //   }
  // }, [meshObject]);

  const couchMesh = useRef();
  const { nodes, materials } = useGLTF("/couches.glb");

  const target = new THREE.Vector3(42.5, -1, -12);
  const mainPos = new THREE.Vector3(50, 0, -12);

  //useEffect(() => {}, [meshObject]);

  useFrame(() => {
    if (props.hovered === "couches") {
      couchMesh.current.position.lerp(target, 0.1);
    } else {
      couchMesh.current.position.lerp(mainPos, 0.03);
    }
  });

  return (
    <>
      {/* <mesh name="couches" ref={couchMesh} castShadow position={[50, 0, -12]}>
        <torusBufferGeometry />
        <meshStandardMaterial color={`red`} />
      </mesh> */}
      <group
        ref={couchMesh}
        {...props}
        dispose={null}
        position={[50, 0, -12]}
        rotation={[0, -Math.PI * 0.25, 0]}
      >
        <mesh
          geometry={nodes.Cube011.geometry}
          material={nodes.Cube011.material}
          position={[-0.08, 0.69, 1.33]}
          rotation={[-Math.PI, 0.15, 1.03]}
        />
        <mesh
          geometry={nodes.Cube012.geometry}
          material={nodes.Cube012.material}
          position={[-0.08, 0.66, 1.57]}
          rotation={[-3.01, 0.89, 0.95]}
        />
        <mesh
          geometry={nodes.Cube010.geometry}
          material={nodes.Cube010.material}
          position={[-0.1, 0.69, 3.1]}
          rotation={[-Math.PI, -0.73, -1.97]}
        />
        <mesh
          geometry={nodes.Cube013.geometry}
          material={nodes.Cube013.material}
          position={[-0.08, 0.69, 2.92]}
          rotation={[-0.12, 0.71, 2.03]}
        />
        <mesh
          geometry={nodes.Cube014.geometry}
          material={nodes.Cube014.material}
          position={[-0.11, 0.63, 2.22]}
          rotation={[0.02, 0.03, 1.97]}
        />
        <mesh
          geometry={nodes.Plane.geometry}
          material={materials["Material.009"]}
          position={[0.19, 1.17, 1.12]}
          rotation={[0.01, 1.03, -1.23]}
        />
        <mesh
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          position={[0, 0.31, 2.19]}
        />
        <mesh
          geometry={nodes.Cube001.geometry}
          material={nodes.Cube001.material}
          position={[0, 0.27, 2.19]}
        />
        <mesh
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
          position={[0.28, 0.12, 3.22]}
        />
        <mesh
          geometry={nodes.Cube003.geometry}
          material={nodes.Cube003.material}
          position={[0.07, 0.43, 1.41]}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          geometry={nodes.Cube004.geometry}
          material={nodes.Cube004.material}
          position={[0.07, 0.43, 2.98]}
        />
        <mesh
          geometry={nodes.Cube007.geometry}
          material={nodes.Cube007.material}
          position={[-0.3, 0.6, 2.97]}
          rotation={[-Math.PI, 0, -1.7]}
        />
        <mesh
          geometry={nodes.Cube005.geometry}
          material={nodes.Cube005.material}
          position={[-0.3, 0.6, 2.18]}
          rotation={[0, 0, -1.45]}
        />
        <mesh
          geometry={nodes.Cube006.geometry}
          material={nodes.Cube006.material}
          position={[-0.3, 0.6, 1.41]}
          rotation={[-Math.PI, 0, 1.45]}
        />
        <mesh
          geometry={nodes.Cube008.geometry}
          material={nodes.Cube008.material}
          position={[0.08, 0.64, 3.29]}
          rotation={[1.87, 0, 0]}
        />
        <mesh
          geometry={nodes.Cube009.geometry}
          material={nodes.Cube009.material}
          position={[0.08, 0.61, 1.08]}
          rotation={[1.56, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.Cube002.geometry}
          material={nodes.Cube002.material}
          position={[0.07, 0.43, 2.19]}
        />
      </group>
    </>
  );
};
useGLTF.preload("/couches.glb");
const mapStateToProps = (state) => ({
  hovered: state.hovered,
});
export default connect(mapStateToProps)(Couch);
