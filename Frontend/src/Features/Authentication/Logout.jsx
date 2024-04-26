import { HiArrowLeftOnRectangle } from 'react-icons/hi2';
import useLogout from './useLogout';
import Loader from '../../Ui/Loader';

function Logout() {
  const { isPending, logout } = useLogout();
  return (
    <div>
      {isPending ? (
        <Loader />
      ) : (
        <button onClick={logout}>
          <HiArrowLeftOnRectangle className="h-8 w-8" />
        </button>
      )}
    </div>
  );
}

export default Logout;
