import UserAvatar from '../Features/Authentication/UserAvatar';
import useUser from '../Features/Authentication/useUser';
import HeaderMenu from './HeaderMenu';

function Header() {
  // const { data } = useUser();
  return (
    <div className="flex items-center text-secondary-0 bg-primary-700 col-[2/11] row-[1/2]">
      <div className="container flex justify-between items-center gap-5">
        <UserAvatar />
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;
