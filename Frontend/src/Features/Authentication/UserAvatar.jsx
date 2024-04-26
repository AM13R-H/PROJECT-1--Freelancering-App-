import userProfile from '../../../public/user.jpg';
import useUser from './useUser';

function UserAvatar() {
  const {user, isLoading} = useUser();

  return (
    <div className={`flex items-center gap-1 ${isLoading ? "blur-sm" : ""}`}>
      <img src={userProfile} alt="user-account" className="w-10 h-10" />
      <span>{user?.name}</span>
    </div>
  );
}

export default UserAvatar;
