import connection from '../../app/database_sql.js';

export default class PictureRepository{
    async addUserPicture(slug, user_email){
        console.log(slug, user_email);
        const request = await connection.promise().query('INSERT INTO `photos` SET ?', {slug, user_email});
        console.log(request);
    }

    async addAnimalPicture(slug, id_animals){
        await connection.promise().query('INSERT INTO `photos` SET ?', {slug, id_animals})
    }
}