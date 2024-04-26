import Table from '../../../Ui/Table';
import { toLocalDateShort } from '../../../Utils/toLocalDateShort';
import { turnCateText } from '../../../Utils/turnCateText';
import '../../../styles/sassCompiler/projectCard.min.css';
import { MdAssignmentAdd } from 'react-icons/md';
import Modal from '../../../Ui/Modal';
import { useState } from 'react';
import CreateProposal from '../../proposals/CreateProposal';

const styleStatus = {
  Open: {
    label: 'Open',
    color: 'text-green-600',
  },
  CLOSED: {
    label: 'Closed',
    color: 'text-danger-600',
  },
};

function ProjectRow({ project, index }) {
  const { title, budget, deadline, status } = project;
  const [open, setOpen] = useState(false);

  return (
    <Table.Row key={project._id}>
      <td className="w-4">{index + 1}</td>
      <td>
        <h2>{turnCateText(title, 20)}</h2>
      </td>
      <td>
        <h3>{budget}$</h3>
      </td>
      <td>{toLocalDateShort(deadline)}</td>
      <td className={`${styleStatus[status].color}`}>{styleStatus[status].label}</td>
      <td>
        <Modal
          key={project._id}
          open={open}
          onClose={() => setOpen(false)}
          title="Create new Proposal"
        >
          <CreateProposal onClose={() => setOpen(false)} projectId={project._id}/>
        </Modal>
        <button onClick={() => setOpen(true)}>
          <MdAssignmentAdd className="w-5 h-5" />
        </button>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
