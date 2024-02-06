import connection from '../../app/database_sql.js'

export default class VaccineRepository {
    async addVaccine(vaccine) {
        const [result] = await connection.promise().query('INSERT INTO `treatments` SET ?', vaccine);
        return result.insertId;
    }

    async getAllVaccines() {
        const [vaccines] = await connection.promise().query('SELECT * FROM `treatments`');
        return vaccines;
    }

    async getVaccineById(id_treatments) {
        const [vaccine] = await connection.promise().query('SELECT * FROM `treatments` WHERE id_treatments = ?', [id_treatments]);
        return vaccine[0] || null;
    }

    async updateVaccineById(id_treatments, vaccineDetails) {
        await connection.promise().query('UPDATE `treatments` SET ? WHERE id_treatments = ?', [vaccineDetails, id_treatments]);
    }

    async deleteVaccineById(id_treatments) {
        await connection.promise().query('DELETE FROM `treatments` WHERE id_treatments = ?', [id_treatments]);
    }
}
