import { HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from 'react-icons/hi';
import Loader from '../../Ui/Loader.jsx';
import Stat from '../../Ui/Stat.jsx';

function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const numOfAcceptProposals = proposals.filter((proposal) => proposal.status === 2).length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const finalIncome = acceptedProposals.reduce((acc, curr) => curr.price + acc , 0);

  return (
    <div className="grid grid-cols-3 gap-8">
      <Stat
        color="primary"
        title="Proposals"
        value={numOfProposals}
        icon={<HiOutlineViewGrid className="w-20 h-20 m-auto" />}
      />
      <Stat
        color="green"
        title="Accepted Proposals"
        value={numOfAcceptProposals}
        icon={<HiCurrencyDollar className="w-20 h-20 m-auto" />}
      />
      <Stat
        color="blue"
        title="Final Income"
        value={finalIncome}
        icon={<HiCollection className="w-20 h-20 m-auto" />}
      />
    </div>
  );
}

export default Stats;
