import { NavLink } from "react-router-dom";

function CostumNavLink({path, style, children}) {
  return (
    <div>
      <NavLink
        to={path}
        className={style}
      >
        {children}
      </NavLink>
    </div>
  );
}

export default CostumNavLink;
