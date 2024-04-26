import DashboardHeader from '../../Ui/DashboardHeader';
import Loader from '../../Ui/Loader';
import useProposals from '../proposals/useProposals';
// import DashboardHeader from './DashboardHeader';
import Stats from './Stats';

function DashboardLayOut() {
  const { proposals, isLoading } = useProposals();
    console.log(proposals);
  if (isLoading) return <Loader />;

  return (
    <div>
      <DashboardHeader />
      <Stats proposals={proposals}/>
    </div>
  );
}

export default DashboardLayOut;
