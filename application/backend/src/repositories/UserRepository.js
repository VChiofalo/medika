import connection from '../../app/database_sql.js'
export default class UserRepository {
    async add(user){
        await connection.promise().query('INSERT INTO `users` SET ?', user);
    }

    async existsEmail(email) {
        return await connection.promise().query('SELECT * FROM `users` WHERE ?', { email }).then((result) => { 
            return (result[0].length > 0);
        });
    }

    async getUserByEmail(email){
        return await connection.promise().query('SELECT * FROM `users` WHERE ?' , {email}).then((result) => {
            return (result[0].length > 0 ? result[0][0] : null);
        })
    }

    async getAllUsers(){
        return await connection.promise().query('SELECT * FROM `users`').then((result) => {
            return (result[0].length > 0 ? result[0] : null);
        });
    }

    async updateUserByEmain(user, email){
        return await connection.promise().query('UPDATE `users` SET ? WHERE ?' , [user, {email}])
    }

    async deleteUserByEmail(email){
        return await connection.promise().query('DELETE FROM `users` WHERE ?' , {email})
    }
}