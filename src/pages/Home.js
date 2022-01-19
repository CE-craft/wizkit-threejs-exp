import Header from "../components/Header";
import Line from "../components/Line";
import { useRef, useEffect } from "react";
import { connect } from "react-redux";
import OverlayTransition from "../components/OverlayTransition";

const Home = (props) => {
  const home = useRef();
  const heading = useRef();

  // const stateEmpty =
  //   props.page &&
  //   Object.keys(props.page).length === 0 &&
  //   props.page.constructor === Object;

  useEffect(() => {
    setTimeout(() => {
      if (!props.page) {
        home.current.style.opacity = 1;
      }
      if (props.page === "menu") {
        home.current.style.opacity = 0;
      } else if (props.page === "Back") {
        home.current.style.opacity = 1;
      }
    }, 500);
  });

  return (
    <>
      {!props.page || props.page === "menu" ? <OverlayTransition /> : ""}

      <div className=" home-page page-grid" ref={home}>
        <Header pageName={"home"} />
        <h1
          ref={heading}
          className="heading-1 u-medium-top-margin u-medium-bottom-margin"
        >
          Designed with purpose
        </h1>
        <div className="paragraphs">
          <p className="paragraphs__medium">
            WIZKIT enable forward thinking developers to build sustainably and
            be part of the solution rather than the problem.
          </p>
          <p>
            Our planet is overheating, biodiversity is reducing rapidly, and
            natural resources are being depleted. With 40% of global
            energy-related CO2 emissions and 30% of global landfill waste,
            construction plays a significant role in our planetary crisis and is
            by far the most polluting sector. We need to do things differently.
          </p>
          <p>
            WIZKIT takes you on a journey toward a future where the construction
            industry is part of the solution rather than the problem. We’ve set
            out to develop scalable solutions that enable like-minded developers
            and investors to build more sustainable, efficient and profitable.
          </p>
        </div>

        <Line className="line-h line-h--pos" />
        <Line className="line-v line-v--pos" />
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps)(Home);
