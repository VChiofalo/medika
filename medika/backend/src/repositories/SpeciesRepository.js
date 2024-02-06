import connection from '../../app/database_sql.js';

export default class SpeciesRepository{
    async getAllSpecies() {
        const [species] = await connection.promise().query('SELECT * FROM `species`');
        return species;
    }
}