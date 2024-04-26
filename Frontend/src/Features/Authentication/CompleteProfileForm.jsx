import Text_Feild from '../../Ui/Text_Feild';
import { useMutation } from '@tanstack/react-query';
import { completeProfile } from '../../Services/authService';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import sendOTP_bg from '../../../IMG/sendOTP_bg.png';
import { BiArrowBack } from 'react-icons/bi';
import { useForm } from 'react-hook-form';
import RadioContainer from '../../Ui/RadioContianer';

function CompleteProfileForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const { isPending, data, error, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const profileHandler = async (data) => {
    try {
      const { user, message } = await mutateAsync(data);
      toast.success(message);

      if (user.status !== 2) {
        navigate('/');
        toast.error('Profile waiting for verify...', {
          icon: '👏',
        });
        return;
      }
      if (user.role === 'OWNER') return navigate('/Owner');
      if (user.role === 'FREELANCER') return navigate('/Freelancer');
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="center__item">
      <form className="checkOTP__container" onSubmit={handleSubmit(profileHandler)}>
        {/* backGround */}
        <span className="backGround"></span>
        <div className="w-5/12 space-y-8">
          <h2 className="header">
            <BiArrowBack className="back__arrow" onClick={() => navigate(-1)} />
            Complete Profile
          </h2>
          <p className="-tracking-tight text-white">
            Create your acount!Fill the blank with your acount name and your email to sign
            up to app
          </p>
          <Text_Feild
            name="name"
            label="Name"
            register={register}
            validationSchema={{
              required: 'Requierd!',
              minLength: {
                value: 10,
                message: 'this is invalid!',
              },
              maxLength: {
                value: 50,
                message: 'this to high!',
              },
            }}
            type="text"
            requierd
            errors={errors}
          />
          <Text_Feild
            name="email"
            label="Email"
            register={register}
            validationSchema={{
              required: 'Requierd!',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'the pattern is not correct!',
              },
            }}
            type="text"
            requierd
            errors={errors}
          />  
          <RadioContainer
            register={register}
            errors={errors}
            configs={{
              name: 'role',
              validationSchema: { required: 'choose role is required!' },
              options: ['Owner', 'Freelancer'],
            }}
          />
          <button className="verify__btn">Sign In</button>
        </div>
        <img src={sendOTP_bg} alt="sendOTP_bg" className="w-5/12 h-full" />
      </form>
    </div>
  );
}

export default CompleteProfileForm;
