import { toLocalDateShort } from '../../Utils/toLocalDateShort';
import { turnCateText } from '../../Utils/turnCateText';
import { TbPencilMinus } from 'react-icons/tb';
import { HiOutlineTrash, HiEye } from 'react-icons/hi';
import Modal from '../../Ui/Modal';
import { useState } from 'react';
import ConfirmDelete from '../../Ui/ConfirmDelete';
import '../../styles/sassCompiler/projectCard.min.css';
import useRemoveProject from './useremoveProject';
import CreateProject from './CreateProject';
import ToggleSwitch from '../../Ui/toggleSwitch';
import { Link } from 'react-router-dom';
import Table from '../../Ui/Table';

function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { deleteProject, isDeletingProject } = useRemoveProject();

  return (
    <Table.Row>
      <td className='w-4'>{index + 1}</td>
      <td>
        <h2>{turnCateText(project.title, 20)}</h2>
      </td>
      <td>
        <h3>{project.category.title}</h3>
      </td>
      <td>{project.budget}$</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td className="flex flex-col items-start gap-1 overflow-y-scroll">
        {project.tags.map((tag) => (
          <span className="border text-primary-800">{tag}</span>
        ))}
      </td>
      <td>{project.freelancer || 'No one...'}</td>
      <td>
        <ToggleSwitch project={project} />
      </td>

      <td className="flex justify-evenly">
        <>
          <button className="customize__btn" onClick={() => setIsEditOpen(true)}>
            <TbPencilMinus className="w-6 h-6" />
          </button>
          {/* Edit Modal */}
          <Modal
            open={isEditOpen}
            onClose={() => setIsEditOpen(false)}
            title={`Edit ${project.title}`}
          >
            <CreateProject onClose={() => setIsEditOpen(false)} projectToEdit={project} />
          </Modal>
        </>
        <>
          <button className="customize__btn" onClick={() => setIsDeleteOpen(true)}>
            <HiOutlineTrash className="w-6 h-6" />
          </button>
          {/* Delete Modal */}
          <Modal
            open={isDeleteOpen}
            onClose={() => setIsDeleteOpen(false)}
            title={`Delete ${project.title}`}
          >
            <ConfirmDelete
              resourceName={project.title}
              onClose={() => setIsDeleteOpen(false)}
              onConfirm={() => {
                deleteProject(project._id, {
                  onSuccess: () => setIsDeleteOpen(false),
                });
              }}
              disabled={false}
            />
          </Modal>
        </>
      </td>
      <td className='flex justify-center items-center'>
        <Link to={project._id}>
          <HiEye className='h-6 w-6 hover:text-primary-900 '/>
        </Link>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
