export default class WeightRepository {
    constructor(connection) {
        this.connection = connection;
    }

    async addWeight(weight) {
        const [result] = await this.connection.promise().query('INSERT INTO `weight` SET ?', weight);
        return result.insertId;
    }

    async getWeightsByAnimalId(id_animals) {
        const [weights] = await this.connection.promise().query('SELECT * FROM `weight` JOIN `animal_weigh` ON `weight`.id_weight = `animal_weigh`.id_weight WHERE `animal_weigh`.id_animals = ?', [id_animals]);
        return weights;
    }

    async updateWeightById(id_weight, weightDetails) {
        await this.connection.promise().query('UPDATE `weight` SET ? WHERE id_weight = ?', [weightDetails, id_weight]);
    }

    async deleteWeightById(id_weight) {
        await this.connection.promise().query('DELETE FROM `weight` WHERE id_weight = ?', [id_weight]);
    }
}
