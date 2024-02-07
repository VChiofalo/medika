import ProfilPageAnimal from "./animal_profil_page"
import useLogged from "../hooks/useLogged";
import AnimalGallery from "../components/animal_gallery";

const Home = () => {

    useLogged()

    return (
        <div >
            <div className="">
                <div className="button-carousel"></div>

                <ProfilPageAnimal/>
                <AnimalGallery/>

            </div>
       
        </div>
    );
};

export default Home;
