import { connect } from "react-redux";
import { menu } from "../store/actions";

const Link = (props) => {
  const switchPage = () => {
    props.dispatch(menu(props.linkName));
  };
  return (
    <a
      href={props.link}
      className={`link ${props.className}`}
      onClick={switchPage}
    >
      {props.linkName}
    </a>
  );
};

export default connect()(Link);
