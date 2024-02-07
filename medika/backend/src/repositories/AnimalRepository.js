import connection from'../../app/database_sql.js'

export default class AnimalRepository {

    // async add(animal) {
    //     await connection.promise().query('INSERT INTO `animals` SET ?', animal);
    // }
   
      addAnimal({ first_name, last_name, birthday, gender, mutual, breed_name, user_email }) {
        const sql = 'INSERT INTO animals (first_name, last_name, birthday, gender, mutual, breed_name, user_email) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const values = [first_name, last_name, birthday, gender, mutual, breed_name, user_email];
        return connection.promise().query(sql, values);
      }

    findAnimalByNameAndUserId(firstname, user_email) {
        return connection.promise().query('SELECT * FROM animals WHERE first_name = ? AND user_email = ?', [firstname, user_email]).then((found) => {
            return (found[0].length ? found[0][0] : null);
        });
    }
      
     getAnimalById(id_animals) {
        return  connection.promise().query('SELECT * FROM `animals` WHERE id_animals = ?', [id_animals]).then((result) => {
            return (result[0].length > 0 ? result[0][0] : null);
        });
    }

    getAllAnimals() {
        return connection.promise().query('SELECT * FROM `animals`').then((result) => {
            return (result[0].length > 0 ? result[0] : null);
        });
    }

    updateAnimalById(id_animals, animalDetails) {
        return connection.promise().query('UPDATE `animals` SET ? WHERE id_animals = ?', [animalDetails, id_animals]);
    }

     deleteAnimalById(id_animals) {
        return  connection.promise().query('DELETE FROM `animals` WHERE id_animals = ?', [id_animals]);
    }
     addAnimalWithWeight(animalData, weightData) {
        // Commencer une transaction
         connection.promise().beginTransaction();
    
        try {
            // Ajout de l'animal
            const [animalResult] =  connection.promise().query('INSERT INTO `animals` SET ?', [animalData]);
            const animalId = animalResult.insertId;
    
            // Ajout du poids initial
            const [weightResult] =  connection.promise().query('INSERT INTO `weight` SET ?', [weightData]);
            const weightId = weightResult.insertId;
    
            // Création de la relation dans `animal_weigh`
             connection.promise().query('INSERT INTO `animal_weigh` SET ?', [{id_animals: animalId, id_weight: weightId}]);
            
            // Valider la transaction si tout se passe bien
             connection.promise().commit();
        } catch (error) {
            // En cas d'erreur, annuler la transaction
             connection.promise().rollback();
            throw error;
        }
    }
}