import CostumNavLink from "./CostumNavLink";

function SideBar() {
  return <div className="col-[1/3] row[1/11]">
    <CostumNavLink path="/Owner/Dashboard">Dashboard</CostumNavLink>
    <CostumNavLink path="/Owner/Projects">Projects</CostumNavLink>
  </div>;
}

export default SideBar;
