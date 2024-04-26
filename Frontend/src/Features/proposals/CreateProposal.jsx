import Text_Feild from '../../Ui/Text_Feild';
import { useForm } from 'react-hook-form';
import useCreateProposal from './useCreateProposal';
import Loader from '../../Ui/Loader';

function CreateProposal({ onClose, projectId }) {
  console.log(projectId);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { createProposal, isCreating } = useCreateProposal();

  const onSubmit = (data) => {
    createProposal({ ...data, projectId }, { onSuccess: () => onClose() });
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="backGround"></div>
      <Text_Feild
        label="Description"
        name="description"
        register={register}
        requierd
        validationSchema={{
          required: 'Required!',
          minLength: {
            value: 10,
            message: 'MinLength enter 10 Characters',
          },
        }}
        errors={errors}
      />
      <Text_Feild
        label="Price"
        name="price"
        register={register}
        requierd
        validationSchema={{
          required: 'Required!',
        }}
        errors={errors}
      />
      <Text_Feild
        label="Duration"
        name="duration"
        register={register}
        requierd
        validationSchema={{
          required: 'Required!',
        }}
        errors={errors}
      />
      {isCreating ? <Loader /> : <button className="verify__btn">Create</button>}
    </form>
  );
}

export default CreateProposal;
