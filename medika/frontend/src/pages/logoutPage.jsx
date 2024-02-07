import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/');
    }, 2500);  

    return () => clearTimeout(timeoutId);
  }, [navigate]);
  
  return (
    <div>
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
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1 style={{ fontSize: '24px', color: '#333' }}>Vous êtes bien déconnecté</h1>
      </div>
    </div>
  );
};

export default LogoutPage;
