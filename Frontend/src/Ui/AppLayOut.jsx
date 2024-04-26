import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

function AppLayOut({children}) {
  return (
    <div className="relative grid grid-cols-10 grid-rows-10 border min-h-screen max-w-screen">
      <Header />
      {/* <SideBar /> */}
      {children}
      <div className="col-[2/11] row-[2/11] border">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayOut;
