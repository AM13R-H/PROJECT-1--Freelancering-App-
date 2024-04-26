import AppLayOut from "../../Ui/AppLayOut";
import CostumNavLink from "../../Ui/CostumNavLink";
import SideBar from "../../Ui/SideBar";

function FreelancerLayOut() {
  return (
    <AppLayOut>
      <SideBar>
        <CostumNavLink path="/Freelancer/Dashboard">Dashboard</CostumNavLink>
        <CostumNavLink path="/Freelancer/Projects">Projects</CostumNavLink>
        <CostumNavLink path="/Freelancer/Proposals">Proposals</CostumNavLink>
      </SideBar>
    </AppLayOut>
  );
}

export default FreelancerLayOut;
