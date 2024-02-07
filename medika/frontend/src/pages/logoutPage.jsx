import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/');
    }, 2500);

    // Assurez-vous de nettoyer le timeout lorsque le composant est démonté
    return () => clearTimeout(timeoutId);
  }, [navigate]);
  
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '24px', color: '#333' }}>Vous êtes déconnecté</h1>
      <Link to="/" style={{ display: 'block', marginTop: '20px', fontSize: '18px' }}>Accueil_page</Link>
    </div>
  );
};

export default LogoutPage;
