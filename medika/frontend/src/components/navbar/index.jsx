import { Link, useLocation } from "react-router-dom";
import Typography from "../common/typography";

function Navbar() {
    const location = useLocation();
    console.log(location.pathname)
    return <>
        <div className="flex justify-center fixed bottom-2 inset-x-2/4">
            <div className="flex gap-3 rounded-full bg-primary p-2">
                <Link to="/profil" className="flex items-center rounded-full bg-white p-1 px-2 gap-2">
                    <i className="fa-solid fa-user"></i>
                    {location.pathname == "/profil" ? 
                    <Typography>Profil</Typography> :
                    null
                    }
                </Link>
                <Link to="/" className="flex items-center rounded-full bg-white p-1 px-2 gap-2">
                    <i className="fa-solid fa-house"></i>
                    {location.pathname == "/home" ? 
                    <Typography>Home</Typography> :
                    null
                    }
                </Link>
                <Link to="/parametre" className="flex items-center rounded-full bg-white p-1 px-2 gap-2">
                    <i className="fa-solid fa-gear"></i>
                    {location.pathname == "/parametre" ? 
                    <Typography>Paramêtre</Typography> :
                    null
                    }
                </Link>
            </div>
           

        </div>        
    </>
  }
  
  export default Navbar;
  