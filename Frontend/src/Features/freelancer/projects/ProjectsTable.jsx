import Table from '../../../Ui/Table';
import useProjects from './useProjects';
import Loader from '../../../Ui/Loader';
import Empty from '../../../Ui/Empty';
import ProjectRow from './ProjectsRow';

function ProjectsTable() {
  const { projects, isLoading } = useProjects();

  if (isLoading) return <Loader />;
  if (!projects.length) return <Empty resourceName="projects" />;

  return (
    <Table>
      <Table.Header>
        <th className="w-4">#</th>
        <th>Title</th>
        <th>Budget</th>
        <th>Deadline</th>
        <th>Status</th>
        <th>Function</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectsTable;
