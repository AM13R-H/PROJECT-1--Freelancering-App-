import SingelProjectHeader from '../Features/singelProject/SingelProjectHeader';
import ProposalsTable from '../Features/singelProject/ProposalsTable';
import useSingelProject from '../Features/singelProject/useSingelProject';
import Empty from '../Ui/Empty';

function SingelProject() {
  const { isLoading, project } = useSingelProject();
  // console.log(project.proposals);

  // if(!project.length) return <Empty/>;
  // console.log(project.proposals);

  return (
    <div>
      <SingelProjectHeader project={project || {}} />
      <ProposalsTable proposals={project.proposals}/>
    </div>
  );
}

export default SingelProject;
