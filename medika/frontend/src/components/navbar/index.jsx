import { Link } from "react-router-dom";

function Navbar() {

    return <>
        <div className="flex justify-center ">
            <div className="flex gap-3 rounded-full bg-red-200 p-2">
                <Link to="/profil" className="flex items-center rounded-full bg-slate-300 p-2 gap-2">
                    <i class="fa-solid fa-user"></i>
                    <button>Profil</button>
                </Link>
                <Link to="/" className="flex items-center rounded-full bg-slate-300 p-2 gap-2">
                    <i class="fa-solid fa-house"></i>
                    <button>Home</button>
                </Link>
                <Link to="/parametre" className="flex items-center rounded-full bg-slate-300 p-2 gap-2">
                    <i class="fa-solid fa-gear"></i>
                    <button>Paramêtre</button>
                </Link>
            </div>
           

        </div>        
    </>
  }
  
  export default Navbar;
  