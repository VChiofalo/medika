import ProfilPageAnimal from "./animal_profil_page"
import AnimalWeightPage from "./animal_weight_page"
import FormAddAnimals from "../components/forms/add_animals";
import {useSelector} from "react-redux"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {

    const user = useSelector((state) => state.user.currentUser )
    const navigate = useNavigate()

    useEffect(() => {

        if(!user) {
            navigate('/login')
        }
    
    },[])

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
