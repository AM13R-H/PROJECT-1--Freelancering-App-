import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../Services/authService";
import toast from "react-hot-toast";

function AuthContainer() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  // console.log(phoneNumber);
  const { isPending: isSendingOtp, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (event) => {
    event.preventDefault();

    try {
      const data = await mutateAsync({ phoneNumber });
      console.log(phoneNumber);
      setStep(2);
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            onSubmit={sendOtpHandler}
            isSendingOtp={isSendingOtp}
            setStep={setStep}
            phonNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            onResendOtp={sendOtpHandler}
            phoneNumber={phoneNumber}
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
