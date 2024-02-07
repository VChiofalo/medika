import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typography from '../components/common/typography';
import { useDispatch } from 'react-redux';
import { logout } from '../store/slices/userSlice';

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
    <div className="bg-white min-h-screen">
      <div
        style={{
          marginBottom: '20px',
          textAlign: 'center',
        }}
        className="bg-primary py-6 rounded-b-lg"
      >
        <div className="flex justify-center">
          <img
            src="/images/Medika.png"
            alt="Main Logo"
            style={{ width: '90px', height: '25px', marginRight: '0px' }}
          />
          <img
            src="/images/Frame18.png"
            alt="Second Logo"
            style={{
              width: '20px',
              height: '20px',
              marginLeft: '0px',
              marginBottom: '5px',
            }}
          />
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
          Mettre fin à la session ?{' '}
          <Link
            onClick={handleLogout}
            to="/"
            className="flex items-center rounded-full bg-white p-1 px-2 gap-2"
            style={{ fontSize: '24px', padding: '10px 20px', textDecoration: 'none', color: '#333' }}
          >
            <i className="fa-solid fa-user"></i>
            <Typography tag={'p'} customClasses={'mt-4 text-center lg:text-base'} style={{ fontSize: '24px' }}>
              
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
