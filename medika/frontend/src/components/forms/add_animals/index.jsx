import {useRef, useState, useEffect} from 'react';
import Typography from "../../common/typography";
import Header from "../../header";
import fetchApi from '../../../services/fetchApi.js';

const FormAddAnimals =  () => {
    const formRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [species, setSpecies] = useState([]);
    const [breeds, setBreeds] = useState([])
    useEffect(() => {
      fetchApi('http://localhost:3000/api/species', 'GET').then(data => setSpecies(data.species));
    }, []);
   
     
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const data = new FormData(formRef.current);
        const first_name = data.get("firstname");
        const last_name = data.get("lastname");
        const birthday = data.get("birthdate");
        const gender = data.get("gender");
        const breed_name = data.get("breedname");

        const body = {
          first_name,
          last_name,
          birthday,
          gender,
          breed_name
        };

        fetchApi('http://localhost:3000/api/animal', 'POST', body).then((response) => {
          response.json();
        })

        console.log('Formulaire soumis', {
          first_name,
          last_name,
          birthday,
          gender,
          breed_name
        });
    };

    const handleSelectChange = ()=>{
      const data = new FormData(formRef.current);
      const specie = data.get("species");

      const body = {species_name: specie};

      console.log(body);

      setIsVisible(true);
      fetchApi('http://localhost:3000/api/breeds', 'POST', body).then(data => {
        setBreeds(data.breeds);
        console.log(data.breeds);
      });
    }

    const speciesSelected = () => {
        return species.map((specie) => {
           return (
           <option key={specie} value={specie}>{specie}</option>
           )
        });
    }

    
    const breedsOption = () => {
      return breeds.map((breed) => {
        return(
          <option key={breed} value={breed}>{breed}</option>
        )
      })
    }

    const breedsSelected = () => {
      return (
        <>
          <div className="mb-4">
            <label htmlFor="breedname" className="block text-lg font-semibold mb-2">Espèce</label>
            <select name="breedname" className="border-2 rounded w-full p-2">
              <option value="">Sélectionnez la race de votre animal</option>
              {breeds && breeds.length > 0 ? breedsOption() : null}
            </select>
          </div>
        </>
      )
    }
        return (
            <>
              <Header />
              <div className="flex w-full justify-center pt-8">
                <div className="flex flex-col w-full max-w-xl p-8 bg-white rounded-lg shadow-md">
                  <Typography variant="h1" className="text-center mb-6">Ajouter un animal</Typography>
                  <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="species" className="block text-lg font-semibold mb-2">Espèce</label>
                      <select name="species" className="border-2 rounded w-full p-2" onChange={handleSelectChange}>
                        <option value="">Selectionner l'espece de votre animal</option>
                        {species.length > 0 ? speciesSelected() : null}
                      </select>
                    </div>
                    {isVisible ? breedsSelected() : null}
                    <div className="mb-4">
                      <label htmlFor="lastname" className="block text-lg font-semibold mb-2">Nom</label>
                      <input name="lastname" type="text" className="border-2 rounded w-full p-2" placeholder="Nom de l'animal"/>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="firstname" className="block text-lg font-semibold mb-2">Prénom</label>
                      <input name="firstname" type="text" className="border-2 rounded w-full p-2" placeholder="Prénom de l'animal"/>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="birthdate" className="block text-lg font-semibold mb-2">Anniversaire</label>
                      <input name="birthdate" type="date" className="border-2 rounded w-full p-2"/>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="gender" className="block text-lg font-semibold mb-2">Sexe</label>
                      <select name="gender" className="border-2 rounded w-full p-2">
                        <option value="female">Femelle</option>
                        <option value="male">Mâle</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>
                
                    <div className="flex justify-center">
                      <button type="submit" className="bg-accentuary text-white rounded-full px-6 py-2">
                        <Typography variant="white">Enregistrer</Typography>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </>
          );
        };
        
        
        export default FormAddAnimals