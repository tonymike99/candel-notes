import "./Aside.css";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

function Aside() {
  const linkDetails = [
    { to: "/home", name: "HOME", icon: "fa-home" },
    { to: "/labels", name: "LABELS", icon: "fa-tag" },
    { to: "/archives", name: "ARCHIVES", icon: "fa-box-archive" },
    { to: "/trash", name: "TRASH", icon: "fa-trash" },
  ];

  return (
    <aside className="aside">
      <ul className="list list-stacked tabs">
        {linkDetails.map((linkDetail) => (
          <Fragment key={linkDetail.to}>
            <li>
              <NavLink to={`${linkDetail.to}`}>
                <i className={`fa-solid ${linkDetail.icon} fa-lg`}></i>
                {`${linkDetail.name}`}
              </NavLink>
            </li>
            <hr className="hr-thin" />
          </Fragment>
        ))}
      </ul>
    </aside>
  );
}

export { Aside };
