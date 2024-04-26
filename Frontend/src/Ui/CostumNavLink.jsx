import { NavLink } from "react-router-dom";

function CostumNavLink({path, style, children}) {
  return (
    <li>
      <NavLink
        to={path}
        className={style}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default CostumNavLink;
