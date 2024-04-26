import AppLayOut from '../../Ui/AppLayOut';
import CostumNavLink from '../../Ui/CostumNavLink';
import SideBar from '../../Ui/SideBar';

function OwnerLayOut() {
  return (
    <AppLayOut>
      <SideBar>
        <CostumNavLink path="/Owner/Dashboard">Dashboard</CostumNavLink>
        <CostumNavLink path="/Owner/Projects">Projects</CostumNavLink>
      </SideBar>
    </AppLayOut>
  );
}

export default OwnerLayOut;
