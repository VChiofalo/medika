import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../navbar";


const Layout = () => {

  const location = useLocation();

  console.log(location);
  const showNavbar = location.pathname !== "/" && location.pathname !== "/register" && location.pathname !== "/login";

  return (
    <div className="flex flex-col justify-between ">
      <Outlet />
      {showNavbar && <Navbar />}    
    </div>
  );
};

export default Layout;