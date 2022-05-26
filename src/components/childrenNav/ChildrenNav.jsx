import { Link } from "react-router-dom";
import avatar from "./../../images/boy.png";
import addIcon from "./../../images/addIcon.svg";

import "./ChildrenNav.css";

function ChildrenNav({ children, activeChild, setActiveChild, showUI }) {
  return (
    <>
      <div className="child-wrapper">
        {children.map(({ id, name }) => (
          <div
            key={id}
            className="child-avatar-box"
            onClick={() => setActiveChild(id)}
          >
            <img
              className={
                activeChild === id
                  ? "child-avatar child-active"
                  : "child-avatar"
              }
              src={avatar}
              alt="Child"
            />
            <p>{name}</p>
          </div>
        ))}
        {showUI && (
          <Link to="/addChild">
            <img src={addIcon} alt="addIcon" className="add_icon" />
          </Link>
        )}
      </div>
      {showUI && (
        <div>
          <Link to="/addChild" className="btn">
            Edytuj
          </Link>
          <Link to="/" className="btn">
            Historia dawkowania
          </Link>
        </div>
      )}
    </>
  );
}

export default ChildrenNav;