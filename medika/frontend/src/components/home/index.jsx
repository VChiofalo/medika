import ProfilPageAnimal from "../../pages/animal_profil_page"
import AnimalWeightPage from "../../pages/animal_weight_page"

const Home = () => {
    
    return (
        <div >
            <div className="w-9/12">
                <h1>ACCUEIL</h1>
                <button>Navbar</button>
                <div className="button-carousel">
                
                </div>

                <ProfilPageAnimal/>
            <AnimalWeightPage/>

            </div>
       
        </div>
    );
};

export default Home;
