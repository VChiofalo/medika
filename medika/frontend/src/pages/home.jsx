import ProfilPageAnimal from "./animal_profil_page"
import AnimalWeightPage from "./animal_weight_page"
import FormAddAnimals from "../components/forms/add_animals";
import useLogged from "../hooks/useLogged";




const Home = () => {

    useLogged()

    return (
        <div >
            <div className="w-9/12">
                <h1>ACCUEIL</h1>
                <button>Navbar</button>
                <div className="button-carousel">
                
                </div>

                <ProfilPageAnimal/>
                <AnimalWeightPage/>
                <FormAddAnimals/>

            </div>
       
        </div>
    );
};

export default Home;
