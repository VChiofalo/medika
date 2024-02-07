import connection from '../../app/database_sql.js';

export default class BreedRepository{
    async getBreedBySpecies(species){
        return await connection.promise().query('SELECT * FROM `breed` WHERE ?' , {species}).then((result) => {
            return (result[0].length > 0 ? result[0] : null);
        })
    }
}