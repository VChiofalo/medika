import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../navbar";


const Layout = () => {

  const location = useLocation();

  console.log(location);
  return (
    <div className="flex flex-col justify-between ">
      {location.pathname === "/" || location.pathname === "/register"|| location.pathname === "/login" ? null : <Navbar />} 
      <Outlet />
    </div>
  );
};

export default Layout;