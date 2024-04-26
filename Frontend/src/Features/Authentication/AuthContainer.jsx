import { useState } from 'react';
import SendOTPForm from './SendOTPForm';
import CheckOTPForm from './CheckOTPForm';
import { useMutation } from '@tanstack/react-query';
import { getOtp } from '../../Services/authService';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

function AuthContainer() {
  const [step, setStep] = useState(1);
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues
  } = useForm();
  const { isPending: isSendingOtp, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (data) => {
    // const phoneNumber = data.PhoneNumber;

    try {
      const {message} = await mutateAsync(data);
      console.log(data);
      setStep(2);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            onSubmit={handleSubmit(sendOtpHandler)}
            isSendingOtp={isSendingOtp}
            setStep={setStep}
            register={register}
            errors={errors}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            onResendOtp={sendOtpHandler}
            phoneNumber={getValues("phoneNumber")}
            onClick={() => setStep(1)}
          />
        );

      default:
        return <div>nothing</div>;
    }
  };

  return <div>{renderStep()}</div>;
}

export default AuthContainer;
