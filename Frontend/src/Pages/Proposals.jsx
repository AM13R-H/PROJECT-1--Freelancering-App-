import ProposalsTable from "../Features/proposals/ProposalsTable";
import useProposals from "../Features/proposals/useProposals";

function Proposlas() {
    const {isLoading, proposals} = useProposals();

    return ( <div>
        <h2 className="header px-5 py-8">Proposals</h2>
        <ProposalsTable proposals={proposals}/>
    </div> );
}

export default Proposlas;