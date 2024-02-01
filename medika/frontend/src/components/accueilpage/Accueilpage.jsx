// HomePage.jsx
import { Link } from 'react-router-dom';
//import welcomeImage from '../../assets/Welcome01.png';

function AccueilPage() {
  return (
    <div className="home-page">


      <div className="continue-button">
        <Link to="/home">CONTINUER</Link>
      </div>
    </div>
  );
}

export default AccueilPage;
