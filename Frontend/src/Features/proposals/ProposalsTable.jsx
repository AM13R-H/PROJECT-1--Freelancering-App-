import Table from '../../Ui/Table';
import ProposalRow from './ProposalRow';

function ProposalsTable({ proposals }) {

  return (
    <Table>
      <Table.Header>
        <th className="w-4">#</th>
        <th>Description</th>
        <th>Duration</th>
        <th>Price</th>
        <th>Status</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalRow key={proposal._id} proposal={proposal} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProposalsTable;
