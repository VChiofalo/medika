import React, { useRef } from 'react';
import Typography from "../../common/typography";
import Header from "../../header";

const FormAddAnimals = () => {
    const formRef = useRef(null);
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const data = new FormData(formRef.current);
        const breedname = data.get("breedname");
        const lastname = data.get("lastname");
        const firstname = data.get("firstname");
        const birthdate = data.get("birthdate");
        const gender = data.get("gender");

        // Traitement des données ici

        console.log('Formulaire soumis', { breedname, lastname, firstname, birthdate, gender });
    };
        return (
            <>
              <Header />
              <div className="flex w-full justify-center pt-8">
                <div className="flex flex-col w-full max-w-xl p-8 bg-white rounded-lg shadow-md">
                  <Typography variant="h1" className="text-center mb-6">Ajouter un animal</Typography>
                  <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="breedname" className="block text-lg font-semibold mb-2">Espèce</label>
                      <select name="breedname" className="border-2 rounded w-full p-2">
                        <option value="dog">Chien</option>
                        <option value="cat">Chat</option>
                        <option value="penguin">Penguin</option>
                      </select>
                    </div>
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