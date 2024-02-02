export default class AnimalRepository {
    constructor(connection) {
        this.connection = connection;
    }

    async add(animal) {
        await this.connection.promise().query('INSERT INTO `animals` SET ?', animal);
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
}
