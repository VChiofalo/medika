function Navbar() {
//link to 
//faire les paths
    return <>
        <div className="flex justify-center ">
            <div className="flex gap-3 rounded-full bg-red-200 p-2">
                <div className="flex items-center rounded-full bg-slate-300 p-2 gap-2">
                    <i class="fa-solid fa-user"></i>
                    <button>Profil</button>
                </div>
                <div className="flex items-center rounded-full bg-slate-300 p-2 gap-2">
                    <i class="fa-solid fa-house"></i>
                    <button>Home</button>
                </div>
                <div className="flex items-center rounded-full bg-slate-300 p-2 gap-2">
                    <i class="fa-solid fa-gear"></i>
                    <button>Paramêtre</button>
                </div>
            </div>
           

        </div>        
    </>
  }
  
  export default Navbar;
  