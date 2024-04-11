import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import useMoveBack from "../Hooks/useMoveBack";

function NotFound() {
   const moveBack = useMoveBack();
   
  return (
    <div className="center__item">
      <div className="flex flex-col space-y-10">
        <h2 className="header">not found 404</h2>
        <button onClick={moveBack} className="flex item-center justify-center tracking-wider hover:text-primary-900 transition-all duration-500">
          <BiArrowBack />
          Back
        </button>
      </div>
    </div>
  );
}

export default NotFound;
