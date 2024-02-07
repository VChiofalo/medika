import connection from '../../app/database_sql.js';

export default class PictureRepository{
    addUserPicture(slug, user_email){
        return connection.promise().query('INSERT INTO `photos` SET ?', {slug, user_email});
    }

    addAnimalPicture(slug, id_animals){
        return connection.promise().query('INSERT INTO `photos` SET ?', {slug, id_animals})
    }

    async getUserPictures(user_email){
        return await connection.promise().query('SELECT * FROM `photos` WHERE ?' , {user_email}).then((result) => {
            return (result[0].length > 0 ? result[0] : null);
        })
    }

    async getAnimalPictures(id_animals){
        return await connection.promise().query('SELECT * FROM `photos` WHERE ?' , {id_animals}).then((result) => {
            return (result[0].length > 0 ? result[0] : null);
        })
    }
}