import { Link } from "react-router-dom";
import Typography from "../common/typography";

function Navbar() {

    return <>
        <div className="flex justify-center fixed bottom-4 inset-x-2/4">
            <div className="flex gap-3 rounded-full bg-primary p-2">
                <Link to="/profil" className="flex items-center rounded-full bg-slate-300 p-2 gap-2">
                    <i className="fa-solid fa-user text-black"></i>
                    <Typography>Profil</Typography>
                </Link>
                <Link to="/" className="flex items-center rounded-full bg-slate-300 p-2 gap-2">
                    <i className="fa-solid fa-house text-black"></i>
                    <Typography>Home</Typography>
                </Link>
                <Link to="/parametre" className="flex items-center rounded-full bg-slate-300 p-2 gap-2">
                    <i className="fa-solid fa-gear text-black"></i>
                    <Typography>Paramêtre</Typography>
                </Link>
            </div>
           

        </div>        
    </>
  }
  
  export default Navbar;
  