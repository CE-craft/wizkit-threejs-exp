import { Suspense } from "react";
//import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Camera from "../components/Camera";
import Box from "../components/Box";
//import { OrbitControls } from "@react-three/drei";
//import Chair from "../3d-models/Chair";
import Couch from "../3d-models/Couch";
import Other from "../3d-models/Other";
import Chair from "../3d-models/Chair";
import { ReactReduxContext, Provider } from "react-redux";
//import { store } from "../store/store";

const ThreeDEnv = (props) => {
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => (
        <Canvas shadows pixelRatio={[1, 2]}>
          <color attach="background" args={"#d2d2d2"} />
          <Provider store={store}>
            <Suspense fallback={null}>
              <Camera />

              <Box />

              <ambientLight intensity={0.1} />
              <directionalLight
                intensity={2}
                color={"#ffffff"}
                position={[-5, 5, 5]}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
              />

              <Chair />
              <Couch />
              <Other />
            </Suspense>
          </Provider>
        </Canvas>
      )}
    </ReactReduxContext.Consumer>
  );
};

export default ThreeDEnv;
