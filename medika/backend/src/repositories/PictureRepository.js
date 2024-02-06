import connection from '../../app/database_sql.js';

export default class PictureRepository{
    async addUserPicture(datas){
        console.log(datas.slug);
        //console.log(user_email)

        await connection.promise().query('INSERT INTO `photos` (slug, user_email) VALUES (?, ?)', datas.slug, datas.user_email);
        //console.log('--')
        //console.log(request);
        //console.log('--')
    }

    async addAnimalPicture(slug, id_animals){
        await connection.promise().query('INSERT INTO `photos` SET ?', {slug, id_animals})
    }
}