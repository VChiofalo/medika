import { Link } from "react-router-dom";
import Typography from "../components/common/typography";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/userSlice";
import { useState } from "react";

const Parameter = () => {
    const dispatch = useDispatch();
    const [deconnexionEffectuee, setDeconnexionEffectuee] = useState(false);

    const handleLogout = () => {
        localStorage.clear();
        dispatch(logout());
        setDeconnexionEffectuee(true);
        setTimeout(() => {
            setDeconnexionEffectuee(false);
        }, 2000); 
    };

    return (
        <div>
            {deconnexionEffectuee && (
                <div style={{ backgroundColor: '#f0f0f0', padding: '10px', marginBottom: '10px' }}>Vous êtes déconnecté.</div>
            )}
            <div>
                <div className="button-carousel"></div>
                <Link
                    onClick={handleLogout}
                    to="/"
                    className="flex items-center rounded-full bg-white p-1 px-2 gap-2"
                >
                    <i className="fa-solid fa-user"></i>
                    
                    <Typography tag={"p"} customClasses={"mt-4 text-center lg:text-base"}>
          Mettre fin à la session ?{" "}
          <Link to="/logout" className="text-primary">
            Deconnexion
          </Link>
        </Typography>

                    
                </Link>
            </div>
        </div>
      </div>
      <div
        style={{
          padding: '20px',
          borderRadius: '5px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        className="sm:w-11/12 mx-auto my-0"
      >
        {deconnexionEffectuee && (
          <div style={{ backgroundColor: '#f0f0f0', padding: '10px', marginBottom: '10px', fontSize: '18px' }}>Vous êtes déconnecté.</div>
        )}
        <div style={{ marginBottom: '20px', fontSize: '24px' }}>
          <div className="button-carousel"></div>
          <Link
            onClick={handleLogout}
            to="/"
            className="flex items-center rounded-full bg-white p-1 px-2 gap-2"
            style={{ fontSize: '24px', padding: '10px 20px', textDecoration: 'none', color: '#333' }}
          >
            <i className="fa-solid fa-user"></i>
            <Typography tag={'p'} customClasses={'mt-4 text-center lg:text-base'} style={{ fontSize: '24px' }}>
              Mettre fin à la session ?{' '}
              <Link to="/logout" className="text-primary" style={{ fontSize: '24px' }}>
                Deconnexion
              </Link>
            </Typography>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Parameter;
