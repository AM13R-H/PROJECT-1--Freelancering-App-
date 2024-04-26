import { HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from 'react-icons/hi';
import Stat from '../../Ui/Stat';
// import Stat from './Stat';

function Stats({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptProjects = projects.filter((p) => p.Status === 2).length;
  // console.log(numOfProjects);

  const numOfProposlas = projects.reduce((acc, curr) => curr.proposals.length + acc, 0);
  return (
    <div className="grid grid-cols-3 gap-8">
      <Stat
        color="primary"
        title="Projects"
        value={numOfProjects}
        icon={<HiOutlineViewGrid className="w-20 h-20 m-auto" />}
      />
      <Stat
        color="green"
        title="Accepted Projects"
        value={numOfAcceptProjects}
        icon={<HiCurrencyDollar className="w-20 h-20 m-auto" />}
      />
      <Stat
        color="blue"
        title="Proposals"
        value={numOfProposlas}
        icon={<HiCollection className="w-20 h-20 m-auto" />}
      />
    </div>
  );
}

export default Stats;
