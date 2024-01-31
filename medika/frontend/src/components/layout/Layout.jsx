import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between ">
    <Outlet />
    </div>
  );
};

export default Layout;