import connection from'../../app/database_sql.js'

export default class AnimalRepository {

    // async add(animal) {
    //     await connection.promise().query('INSERT INTO `animals` SET ?', animal);
    // }
    async addAnimal({ last_name, first_name, birthdate, breed_name, gender,mutual, user_email }) {
        const sql = 'INSERT INTO animals (first_name, last_name, birthdate, gender,  mutual,  user_email) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [ first_name, last_name, birthdate, breed_name, gender, mutual, user_email];
        await connection.promise().query(sql, values);
      }

    async findAnimalByNameAndUserId(firstname, userId) {
        const found = await this.connection.query('SELECT * FROM animals WHERE firstname = ? AND userId = ?', [firstname, userId]);
        return found[0].length ? found[0][0] : null;
      }
      
    async getAnimalById(id_animals) {
        return await this.connection.promise().query('SELECT * FROM `animals` WHERE id_animals = ?', [id_animals]).then((result) => {
            return (result[0].length > 0 ? result[0][0] : null);
        });
    }

    async getAllAnimals() {
        return await this.connection.promise().query('SELECT * FROM `animals`').then((result) => {
            return (result[0].length > 0 ? result[0] : null);
        });
    }

    async updateAnimalById(id_animals, animalDetails) {
        return await this.connection.promise().query('UPDATE `animals` SET ? WHERE id_animals = ?', [animalDetails, id_animals]);
    }

    async deleteAnimalById(id_animals) {
        return await this.connection.promise().query('DELETE FROM `animals` WHERE id_animals = ?', [id_animals]);
    }
    async addAnimalWithWeight(animalData, weightData) {
        // Commencer une transaction
        await this.connection.promise().beginTransaction();
    
        try {
            // Ajout de l'animal
            const [animalResult] = await this.connection.promise().query('INSERT INTO `animals` SET ?', [animalData]);
            const animalId = animalResult.insertId;
    
            // Ajout du poids initial
            const [weightResult] = await this.connection.promise().query('INSERT INTO `weight` SET ?', [weightData]);
            const weightId = weightResult.insertId;
    
            // Création de la relation dans `animal_weigh`
            await this.connection.promise().query('INSERT INTO `animal_weigh` SET ?', [{id_animals: animalId, id_weight: weightId}]);
            
            // Valider la transaction si tout se passe bien
            await this.connection.promise().commit();
        } catch (error) {
            // En cas d'erreur, annuler la transaction
            await this.connection.promise().rollback();
            throw error;
        }
    }
}