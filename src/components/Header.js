import Link from "../components/Link";
import Line from "./Line";

const Header = (props) => {
  return (
    <>
      <header className="header">
        <p className="logo">WIZKIT</p>
        <div className="header__links">
          <Line className="header__line-cart" />
          <Link link={`#`} linkName={"Cart"} className="header__link" />

          <Line className="header__line-menu" />
          <Link
            link={`#`}
            linkName={props.pageName === "menu" ? "Back" : "menu"}
            className="header__link"
          />
        </div>
      </header>
      <Line className="header__line" />
    </>
  );
};

export default Header;
