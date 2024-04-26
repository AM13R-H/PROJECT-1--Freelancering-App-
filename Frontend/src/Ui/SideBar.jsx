import CostumNavLink from "./CostumNavLink";

function SideBar({children}) {
  return <ul className="col-[1/2] row[1/11] bg-primary-900">
    {children}
  </ul>;
}

export default SideBar;
