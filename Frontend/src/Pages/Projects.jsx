import { useState } from 'react';
import CreateProject from '../Features/Projects/CreateProject';
import ProjectsTable from '../Features/Projects/ProjectsTable';
import Modal from '../Ui/Modal';

function Projects() {
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between px-10 py-6">
        <h2 className="header">Projects</h2>
        <button
          className="verify__btn w-fit flex items-center gap-2 px-3"
          onClick={() => setIsCreateOpen(true)}
        >
          {/* <HiOutlinePlus /> */}
          Create Project
        </button>
        <Modal
          open={isCreateOpen}
          onClose={() => setIsCreateOpen(false)}
          title="Create new project"
        >
          <CreateProject onClose={() => setIsCreateOpen(false)} />
        </Modal>
      </div>
      <ProjectsTable />
    </div>
  );
}

export default Projects;
