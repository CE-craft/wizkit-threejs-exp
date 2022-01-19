import { connect } from "react-redux";
import { useRef, useEffect } from "react";

const Line = (props) => {
  //console.log(props.page);

  // const line = useRef();
  // useEffect(() => {
  //   if (props.className === "line-h line-h--pos") {
  //     line.current.style.animation = "lineWidthIn";
  //     line.current.style.animationDuration = "1s";
  //   }
  //   if (props.className === "line-v line-v--pos") {
  //     line.current.style.animation = "lineHeightIn";
  //     line.current.style.animationDuration = "1s";
  //   }

  //   if (props.className === "line-h line-h--pos" && props.page === "menu") {
  //     line.current.style.animation = "lineWidthOut";
  //     line.current.style.animationDuration = "1s";
  //   }
  //   if (props.className === "line-v line-v--pos" && props.page === "menu") {
  //     line.current.style.animation = "lineHeightOut";
  //     line.current.style.animationDuration = "1s";
  //   }
  // }, [line]);

  return <div className={`line-separator ${props.className}`}></div>;
};

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps)(Line);
