import connection from '../../app/database_sql.js';

export default class BreedRepository{
    async getBreedBySpecies(species_name){
        console.log(species_name);
        return await connection.promise().query('SELECT * FROM `breed` WHERE ?' , {species_name: species_name}).then((result) => {
            return (result[0].length > 0 ? result[0] : null);
        })
    }
}