import { useForm } from 'react-hook-form';
import RHFSelect from '../../Ui/RHFSelect.jsx';
import useChangeProposalStatus from './useChangeProposalStatus.js';
import { useParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const options = [
  {
    value: 0,
    label: 'Reject',
  },
  {
    value: 1,
    label: 'waiting for accept',
  },
  {
    value: 2,
    label: 'accept',
  },
];

function ChangeProposalForm({ proposalId, onClose }) {
  // console.log(proposalId);
  const { id: projectId } = useParams();
  const queryClient = useQueryClient();
  const { changeStatus, isUpdating } = useChangeProposalStatus();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    changeStatus(
      { id: proposalId, projectId, ...data },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['singelProject', projectId] });

          onClose();
        },
        onError: (err) => {
          toast.error(err?.response?.data?.message);
        },
      },
    );
  };

  return (
    <form className="relative space-y-5 z-20" onSubmit={handleSubmit(onSubmit)}>
      <div className="backGround"></div>
      <RHFSelect
        label="Proposal status"
        name="status"
        register={register}
        errors={errors}
        options={options}
        validationSchema={{
          requierd: 'you must change status!',
        }}
      />
      <button className="verify__btn">Confirm</button>
    </form>
  );
}

export default ChangeProposalForm;
