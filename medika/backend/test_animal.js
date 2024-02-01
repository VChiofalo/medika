import pool from '../backend/app/database_sql.js';
import Animal from '../backend/src/repositories/Animal.js' // Ajustez le chemin vers votre fichier Animal.js

const animalRepo = new Animal(pool);

async function testAnimalRepo() {
    // Exemple d'ajout d'un animal
    const newAnimal = {
        first_name: 'Rex',
        last_name: 'The Dog',
        birthday: '2020-01-01',
        gender: 'Male',
        breed_name: 'Golden Retriever', 
        user_email: 'owner@example.com' 
    };
    await animalRepo.add(newAnimal);
    
   
    const animal = await animalRepo.getAnimalById(1);
    console.log(animal);
}

testAnimalRepo().catch(console.error);
