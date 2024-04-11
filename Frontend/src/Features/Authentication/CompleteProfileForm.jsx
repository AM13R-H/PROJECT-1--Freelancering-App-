import { useState } from "react";
import Text_Feild from "../../Ui/Text_Feild";
import RadioInput from "../../Ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../Services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import sendOTP_bg from "../../../IMG/sendOTP_bg.png";
import { BiArrowBack } from "react-icons/bi";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const { isPending, data, error, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user, message } = await mutateAsync({ name, email, role });
      toast.success(message);

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

  return (
    <div className="center__item">
      <form className="checkOTP__container" onSubmit={handleSubmit}>
        {/* backGround */}
        <span className="backGround"></span>
        <div className="w-5/12 space-y-8">
          <h2 className="header">
            <BiArrowBack className="back__arrow" onClick={() => navigate(-1)} />
            Complete Profile
          </h2>
          <p className="-tracking-tight text-white">
            Create your acount!Fill the blank with your acount name and your
            email to sign up to app
          </p>
          <Text_Feild
            value={name}
            onChange={(e) => setName(e.target.value)}
            name={name}
            label="Name"
            type="text"
            inputStyle="textField__input"
            labelStyle="text-white"
          />
          <Text_Feild
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name={email}
            label="Email"
            type="email"
            inputStyle="textField__input"
            labelStyle="text-white"
          />
          <div className="flex justify-between p-3">
            <RadioInput
              name="role"
              value="FREELANCER"
              onChange={(e) => setRole(e.target.value)}
              labelStyle="label__Radio"
              inputStyle="radio__input"
            />
            <RadioInput
              name="role"
              value="OWNER"
              onChange={(e) => setRole(e.target.value)}
              labelStyle="label__Radio"
              inputStyle="radio__input"
            />
          </div>
          <button className="verify__btn">Sign In</button>
        </div>
        <img src={sendOTP_bg} alt="sendOTP_bg" className="w-5/12 h-full" />
      </form>
    </div>
  );
}

export default CompleteProfileForm;
