import Table from '../../Ui/Table';
import { turnCateText } from '../../Utils/turnCateText';

const statusStyle = [
  {
    label: 'rejected',
    className: 'bg-red-600',
  },
  {
    label: 'waiting for accept',
    className: 'bg-secondary-200',
  },
  {
    label: 'accepted',
    className: 'bg-green-600',
  },
];

function ProposalRow({ proposal, index }) {

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{turnCateText(proposal.description, 20)}</td>
      <td>{proposal.duration} days</td>
      <td>{proposal.price}</td>
      <td className={`badge ${statusStyle[proposal.status].className}`}>
        {statusStyle[proposal.status].label}
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
