// HomePage.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import welcomeImage from '../../assets/Welcome01.png';

function AccueilPage() {
  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const path = ['/images/Welcome01.png', '/images/Welcome02.png', '/images/Welcome03.png'];

  useEffect(() => {
    let interval;
    const preloadImages = async () => {
      const promises = path.map((imagePath) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.addEventListener('load', () => resolve(img));
          img.addEventListener('error', (err) => {console.log(imagePath); reject(err);});
          img.src = imagePath;
        });
      });

      console.log('Chargement des images :', promises);

      try {
        await Promise.all(promises).then(() => {
          console.log('Toutes les images ont été chargeées avec succès !', )
          setIsLoading(false);
           interval = setInterval(() => {
            setCurrentPathIndex((prevIndex) => (prevIndex + 1) % path.length);
          }, 4000);
        });
        console.log('Toutes les images ont été chargées avec succès !');
      } catch (error) {
        console.error('Une erreur s\'est produite lors du chargement des images :', error);
      }
    };

    preloadImages();



    return () => clearInterval(interval);

  }, []);

  return (
    <div className={`home-page bg-cover w-screen h-screen`} style={{ backgroundImage: `url(${path[currentPathIndex]})` }}>
      {isLoading && <div className="loader">Chargement en cours...</div>}
      {!isLoading && (
        <div className="continue-button">
          <Link to="/home">CONTINUER</Link>
        </div>
      )}
    </div>
  );
}








export default AccueilPage;
