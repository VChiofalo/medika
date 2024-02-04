import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../navbar";


const Layout = () => {

  const location = useLocation();

  console.log(location);
  return (
    <div className="min-h-screen flex flex-col justify-between ">
      {location.pathname === "/" ? null : <Navbar />} 
      <Outlet />
    </div>
  );
};

export default Layout;