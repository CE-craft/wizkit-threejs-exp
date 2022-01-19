import { useRef, useEffect } from "react";
import { connect } from "react-redux";

const OverlayTransition = (props) => {
  const overlay = useRef();

  useEffect(() => {
    if (props.page === "menu" || props.page === "Back") {
      overlay.current.style.animation = "overlayTransition";
      overlay.current.style.animationDuration = "1s";
    }
  });

  return <div ref={overlay} className="overlay-transition"></div>;
};

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps)(OverlayTransition);
