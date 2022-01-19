import Line from "../components/Line";
import Header from "../components/Header";
import Link from "../components/Link";
//import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { hoverMenu, resetHoverStore } from "../store/actions";
import OverlayTransition from "../components/OverlayTransition";

const Menu = (props) => {
  const menu = useRef();

  // const stateEmpty =
  //   props.page &&
  //   Object.keys(props.page).length === 0 &&
  //   props.page.constructor === Object;

  useEffect(() => {
    setTimeout(() => {
      menu.current.style.display = "none";
      if (!props.page || props.page === "Back") {
        menu.current.style.display = "none";
        menu.current.style.opacity = 0;
      } else if (props.page === "menu") {
        menu.current.style.display = "grid";
        menu.current.style.opacity = 1;
      }
    }, 500);
  });

  const storeHovered = (e) => {
    const hovered = e.target.id;
    props.dispatch(hoverMenu(hovered));
  };

  const resetHoverd = () => {
    props.dispatch(resetHoverStore());
  };

  return (
    <>
      {props.page === "Back" ? <OverlayTransition /> : ""}
      <div className="page-grid menu" ref={menu}>
        <Header pageName={"menu"} />

        <h1
          onMouseEnter={storeHovered}
          onMouseLeave={resetHoverd}
          id="chairs"
          className="menu__link heading-1 u-medium-top-margin u-medium-bottom-margin"
        >
          Chairs
        </h1>
        <Line className="line-h line-h--posm line-h--chairs" />
        <h1
          onMouseEnter={storeHovered}
          onMouseLeave={resetHoverd}
          id="couches"
          className="menu__link heading-1 u-medium-top-margin u-medium-bottom-margin"
        >
          Couches
        </h1>
        <Line className="line-h line-h--posm line-h-couches" />
        <h1
          onMouseEnter={storeHovered}
          onMouseLeave={resetHoverd}
          id="other"
          className="menu__link heading-1 u-medium-top-margin u-medium-bottom-margin"
        >
          Other
        </h1>
        <Line className="line-h line-h--posm line-other" />

        <div className="menu__social-links">
          <Link link={`#`} linkName={"Twitter"} className="header__link" />
          <Link link={`#`} linkName={"Facebook"} className="header__link" />
          <Link link={`#`} linkName={"instagram"} className="header__link" />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  page: state.page,
  hovered: state.hovered,
});

export default connect(mapStateToProps)(Menu);
