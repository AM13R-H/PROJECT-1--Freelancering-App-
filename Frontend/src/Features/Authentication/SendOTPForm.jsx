import Text_Feild from "../../Ui/Text_Feild";
import Loader from "../../Ui/Loader";
import sendOTP_bg from "../../../IMG/sendOTP_bg.png";

function SendOTPForm({ phoneNumber, onChange, onSubmit, isSendingOtp }) {
  // console.log(phoneNumber);
  return (
    <div className="center__item">
      {isSendingOtp ? (
        <Loader />
      ) : (
        <form className="checkOTP__container " onSubmit={onSubmit}>
          {/* backGround */}
          <span className="backGround"></span>
          <div className="w-5/12 space-y-8">
            <h2 className="header">
              Enter
              <br /> Your PhoneNumber
            </h2>
            <p className="-tracking-tight text-white">
              Welcome!!!
              <br />
              Please inter the phoneNumber you want to send verify code to that
            </p>
            <Text_Feild
              name="number"
              label="PhoneNumber"
              onChange={onChange}
              value={phoneNumber}
              type="number"
              inputStyle="textField__input"
              labelStyle="text-white"
            />
            <button className="verify__btn">Send Verify Code</button>
          </div>
          <img src={sendOTP_bg} alt="sendOTP_bg" className="w-5/12 h-full" />
        </form>
      )}
    </div>
  );
}

export default SendOTPForm;
