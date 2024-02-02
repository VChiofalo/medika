export default class VaccineRepository {
    constructor(connection) {
        this.connection = connection;
    }

    async addVaccine(vaccine) {
        const [result] = await this.connection.promise().query('INSERT INTO `treatments` SET ?', vaccine);
        return result.insertId;
    }

    async getAllVaccines() {
        const [vaccines] = await this.connection.promise().query('SELECT * FROM `treatments`');
        return vaccines;
    }

    async getVaccineById(id_treatments) {
        const [vaccine] = await this.connection.promise().query('SELECT * FROM `treatments` WHERE id_treatments = ?', [id_treatments]);
        return vaccine[0] || null;
    }

    async updateVaccineById(id_treatments, vaccineDetails) {
        await this.connection.promise().query('UPDATE `treatments` SET ? WHERE id_treatments = ?', [vaccineDetails, id_treatments]);
    }

    async deleteVaccineById(id_treatments) {
        await this.connection.promise().query('DELETE FROM `treatments` WHERE id_treatments = ?', [id_treatments]);
    }
}
