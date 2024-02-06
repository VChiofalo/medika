
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '/images/Medika_b.png'; 
import secondaryLogo from '/images/Frame18_b.png'; 

function AccueilPage() {
  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const path = ['/images/Welcome01.jpg', '/images/Welcome02.jpg', '/images/Welcome03.jpg'];

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
          }, 6000);
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
    <div className={`home-page bg-cover w-screen h-screen`} style={{ backgroundImage: `url(${path[currentPathIndex]})`, backgroundPosition: 'center',display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
      {/* Ajout des logos  */}
      <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
        <img src={mainLogo} alt="Main Logo" style={{ marginRight: '4px' }} />
        <img src={secondaryLogo} alt="Secondary Logo" style={{ height: '40px', marginLeft: '-4px', marginTop: '-12px' }} />
      </div>
      {/* Affichage du chargement en cours */}
    {isLoading && <div className="loader">Chargement en cours...</div>}
    {!isLoading && (
        <div className="continue-button-container absolute bottom-8 left-1/2 tr
        ansform -translate-x-1/2">
          <div className="continue-button bg-orange-500 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg">
            <Link to="/login">Continuer</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default AccueilPage;