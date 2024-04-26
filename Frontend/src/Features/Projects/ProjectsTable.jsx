import useOwnerProjects from './useOwnerProjects';
import Loader from '../../Ui/Loader';
import Empty from '../../Ui/Empty';
import Table from '../../Ui/Table';
import ProjectRow from './ProjectRow';
// import { HiOutlinePlus } from 'react-icons/hi2';
import CreateProject from './CreateProject';
import Modal from '../../Ui/Modal';
import { useState } from 'react';

function ProjectsTable() {
  const { isLoading, projects } = useOwnerProjects();
  console.log(projects);

  if (isLoading) return <Loader />;
  if (!projects.length) return <Empty resourceName="projects" />;

  return (
    <Table>
      <Table.Header>
        <th className="w-4">#</th>
        <th>Title</th>
        <th>Category</th>
        <th>Budget</th>
        <th>Deadline</th>
        <th>Tags</th>
        <th>Freelancer</th>
        <th>Status</th>
        <th>Function</th>
        <th>Change Status</th>
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
