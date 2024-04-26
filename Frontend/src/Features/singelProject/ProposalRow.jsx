import Table from "../../Ui/Table";
import { turnCateText } from '../../Utils/turnCateText';
import Modal from "../../Ui/Modal";
import { useState } from "react";
import ChangeProposalForm from "./ChangeProposalForm";

const statusStyle = [
    {
        label: "rejected",
        className: "bg-red-600"
    },
    {
        label: "waiting for accept",
        className: "bg-secondary-200"
    },
    {
        label: "accepted",
        className: "bg-green-600"
    }
]

function ProposalRow({proposal, index}) {
    const [open,setOpen] = useState(false);
    return ( <Table.Row>
        <td>{index +1}</td>
        <td>{proposal.user.name}</td>
        <td>{turnCateText(proposal.description, 20)}</td>
        <td>{proposal.duration}</td>
        <td>{proposal.price}</td>
        <td className={`badge ${statusStyle[proposal.status].className}`}>{statusStyle[proposal.status].label}</td>
        <td>
            <button className="verify__btn" onClick={() => setOpen(true)}>Change Status</button>
            <Modal title="Change proposal status" open={open} onClose={() => setOpen(false)}>
                <ChangeProposalForm proposalId={proposal._id} onClose={() => setOpen(false)}/>
            </Modal>
        </td>
    </Table.Row> );
}

export default ProposalRow;