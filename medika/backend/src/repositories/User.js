export default class User {
    constructor(connection) {
        this.connection = connection;
    }

    async add(user) {
        const [result] = await this.connection.promise().query('INSERT INTO `users` SET ?', [user]);
        return result.insertId;
    }

    async existsEmail(email) {
        const [result] = await this.connection.promise().query('SELECT * FROM `users` WHERE email = ?', [email]);
        return result.length > 0;
    }

    async getUserByEmail(email) {
        const [result] = await this.connection.promise().query('SELECT * FROM `users` WHERE email = ?', [email]);
        return result.length > 0 ? result[0] : null;
    }

    async getAllUsers() {
        const [result] = await this.connection.promise().query('SELECT * FROM `users`');
        return result.length > 0 ? result : null;
    }

    async updateUserByEmail(email, userDetails) {
        await this.connection.promise().query('UPDATE `users` SET ? WHERE email = ?', [userDetails, email]);
    }

    async deleteUserByEmail(email) {
        const [result] = await this.connection.promise().query('DELETE FROM `users` WHERE email = ?', [email]);
        return result.affectedRows > 0;
    }
}