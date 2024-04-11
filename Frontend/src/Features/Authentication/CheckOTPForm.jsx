import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import OTP_bg from "../../../IMG/OTP_bg.png";
import { useMutation } from "@tanstack/react-query";
import { checkOtp } from "../../Services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Loader from "../../Ui/Loader";

function CheckOTPForm({ phoneNumber, onClick, onResendOtp }) {
  const [otp, setOtp] = useState();
  const navigate = useNavigate();
  const [time, setTime] = useState(60);

  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const checkOtpHandler = async (event) => {
    event.preventDefault();
    navigate("/complete-profile");

    try {
      const { user, message } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);

      if (!user.isActive) return navigate("/complete-profile");
      if (user.status !== 2) {
        navigate("/");
        toast.error("Profile waiting for verify...", {
          icon: "👏",
        });
        return;
      }
      if (user.role === "OWNER") return navigate("/Owner");
      if (user.role === "FREELANCER") return navigate("/Freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  return (
    <div className="center__item">
      {isPending ? (
        <Loader />
      ) : (
        <form className="checkOTP__container" onSubmit={checkOtpHandler}>
          {/* backGround */}
          <span className="backGround"></span>
          <div className="w-5/12 space-y-8">
            <h2 className="header">
              <BiArrowBack className="back__arrow" onClick={onClick} />
              Enter The Code
            </h2>
            <p className="-tracking-tight text-white">
              Enter The CodeThat we send to your phone number{" "}
              <span className="text-primary-800 text-lg font-bold">09******51</span> be careful
              not to share code with any one
            </p>
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={5}
              renderSeparator={<span className="p-3"></span>}
              renderInput={(props) => <input type="number" {...props} />}
              containerStyle="flex flex-row-reverse justify-between"
              inputStyle="otp__input"
            />
            <aside className="space-y-2">
              <button className="verify__btn">Verify phone Number</button>
              <button onClick={onClick} className="cancel__btn">
                Cancel
              </button>
              <button className="text-secondary-200 text-center w-full pt-4">
                {time ? (
                  <span className="cursor-default">
                    ({time}) second to resend code...
                  </span>
                ) : (
                  <button
                    onClick={onResendOtp()}
                    className="hover:text-primary-900 hover:tracking-widest transition-all duration-300"
                  >
                    Resend code?
                  </button>
                )}
              </button>
            </aside>
          </div>
          <img src={OTP_bg} alt="OTP-BG" className="w-5/12 h-full" />
        </form>
      )}
    </div>
  );
}

export default CheckOTPForm;
