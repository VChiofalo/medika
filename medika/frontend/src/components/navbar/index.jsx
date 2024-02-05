import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation(); 

    const isActive = (pathname) => location.pathname === pathname;


    return (
        <div className="fixed inset-x-0 bottom-0 bg-white shadow-lg">
            <div className="flex justify-center max-w-screen-xl mx-auto py-4">
                <Link to="/profil" className={`flex items-center rounded-full p-2 gap-2 ${isActive('/profil') ? 'bg-teal-600' : 'bg-slate-300'}`}>
                    <i className="fa-solid fa-user"></i>
                    <button>Profil</button>
                </Link>
                <Link to="/" className={`flex items-center rounded-full p-2 gap-2 ${isActive('/') ? 'bg-teal-600' : 'bg-slate-300'}`}>
                    <i className="fa-solid fa-house"></i>
                    <button>Home</button>
                </Link>
                <Link to="/parametre" className={`flex items-center rounded-full p-2 gap-2 ${isActive('/parametre') ? 'bg-teal-600' : 'bg-slate-300'}`}>
                    <i className="fa-solid fa-gear"></i>
                    <button>Paramètres</button>
                </Link>
            </div>
        </div>        
    );
}

export default Navbar;
  