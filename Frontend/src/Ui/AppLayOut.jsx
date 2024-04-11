import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

function AppLayOut() {
  return (
    <div className="relative grid grid-cols-10 grid-rows-10 border min-h-screen max-w-screen">
      <Header />
      <SideBar />
      <div className="col-[3/11] row-[2/11] border">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayOut;
