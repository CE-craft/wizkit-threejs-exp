/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/other-no-normals.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.001']} position={[0, 0.4, 0.05]}>
        <mesh geometry={nodes.Cube001_1.geometry} material={nodes.Cube001_1.material} position={[0, 0.04, 0.1]} />
        <mesh geometry={nodes.Cube002.geometry} material={nodes.Cube002.material} position={[0, -0.05, 0.1]} />
        <mesh geometry={nodes.Cube003.geometry} material={nodes.Cube003.material} position={[0.12, -0.14, -0.05]} />
        <mesh geometry={nodes.Cube004.geometry} material={nodes.Cube004.material} position={[0, -0.14, -0.16]} />
        <mesh geometry={nodes.Cube005.geometry} material={nodes.Cube005.material} position={[-0.12, -0.14, -0.05]} />
        <mesh geometry={nodes.Cube006.geometry} material={nodes.Cube006.material} position={[0, -0.14, 0.05]} />
        <mesh geometry={nodes.Cylinder.geometry} material={nodes.Cylinder.material} position={[-0.14, -0.29, 0.05]} />
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
  )
}

useGLTF.preload('/other-no-normals.glb')
