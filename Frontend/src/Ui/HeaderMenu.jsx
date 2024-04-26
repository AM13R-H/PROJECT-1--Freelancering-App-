import {HiOutlineUser} from "react-icons/hi";
import DarkModetoggle from "./DarkModeToggle";
import Logout from "../Features/Authentication/LogOut";

function HeaderMenu() {
    return ( <ul className="flex items-center gap-5">
        <li>
            <HiOutlineUser className="h-8 w-8"/>
        </li>
        <li>
            <DarkModetoggle />
        </li>
        <li>
            <Logout />
        </li>
    </ul> );
}

export default HeaderMenu;