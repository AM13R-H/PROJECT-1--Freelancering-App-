import Table from '../../Ui/Table';
import ProposalRow from './ProposalRow';

function ProposalsTable({proposals}) {
  // console.log(proposals);

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>Freelancer</th>
        <th>Caption</th>
        <th>Duration</th>
        <th>Price</th>
        <th>Status</th>
        <th>function</th>
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
