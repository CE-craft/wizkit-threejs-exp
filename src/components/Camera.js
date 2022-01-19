import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { connect } from "react-redux";

import { useRef } from "react";

const Camera = (props) => {
  const camera = useRef();

  // const stateEmpty =
  //   props.page &&
  //   Object.keys(props.page).length === 0 &&
  //   props.page.constructor === Object;

  useFrame((state) => {
    setTimeout(() => {
      if (props.page === "menu") {
        state.camera.position.set(40, 0, -9);
      } else if (props.page === "Back") {
        state.camera.position.set(0, 0, 7);
      }
    }, 500);
  });
  return (
    <PerspectiveCamera
      ref={camera}
      makeDefault
      aspect={window.innerWidth / window.innerHeight}
      position={[0, 0, 7]}
      far={100}
      near={0.1}
      fov={45}
      // lookAt={}
      onUpdate={(self) => self.updateProjectionMatrix()}
    />
  );
};

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps)(Camera);
