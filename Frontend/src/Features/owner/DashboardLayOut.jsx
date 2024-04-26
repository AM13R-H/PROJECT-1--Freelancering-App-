import DashboardHeader from '../../Ui/DashboardHeader';
import useOwnerProjects from '../Projects/useOwnerProjects';
// import DashboardHeader from './DashboardHeader';
import Stats from './Stats';

function DashboardLayOut() {
  const { isLoading, projects } = useOwnerProjects();
  // console.log(projects);
  // if (isLoading) return <Loader />;

  return (
    <div>
      <DashboardHeader />
      <Stats projects={projects}/>
    </div>
  );
}

export default DashboardLayOut;
