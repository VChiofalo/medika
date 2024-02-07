import connection from '../../app/database_sql.js';

export default class PictureRepository{
    addUserPicture(slug, user_email){
        return connection.promise().query('INSERT INTO `photos` SET ?', {slug, user_email});
    }

    addAnimalPicture(slug, id_animals){
        return connection.promise().query('INSERT INTO `photos` SET ?', {slug, id_animals})
    }
}