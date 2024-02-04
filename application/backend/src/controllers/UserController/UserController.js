export default class UserController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async addUser(req, res) {
        try {
            const { email, first_name, last_name, password, two_factor } = req.body;
            // Vous pouvez ici ajouter une logique pour hasher le mot de passe avant de l'insérer dans la base de données
            const userExists = await this.userRepository.existsEmail(email);
            if (userExists) {
                return res.status(400).json({ message: 'Email already exists!' });
            }
            await this.userRepository.add({ email, first_name, last_name, password, two_factor });
            res.status(201).json({ message: 'User created successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error adding user: ' + error.message });
        }
    }

    async getAllUsers(req, res) {
        try {
            const users = await this.userRepository.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving users: ' + error.message });
        }
    }

    async getUserByEmail(req, res) {
        try {
            const { email } = req.params;
            const user = await this.userRepository.getUserByEmail(email);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving user: ' + error.message });
        }
    }

    async updateUserByEmail(req, res) {
        try {
            const { email } = req.params;
            const { first_name, last_name, password, two_factor } = req.body;
            // Encore une fois, pensez à hasher le mot de passe si nécessaire
            const updateResult = await this.userRepository.updateUserByEmail({ first_name, last_name, password, two_factor }, email);
            if (updateResult.affectedRows === 0) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User updated successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error updating user: ' + error.message });
        }
    }

    async deleteUserByEmail(req, res) {
        try {
            const { email } = req.params;
            const deleteResult = await this.userRepository.deleteUserByEmail(email);
            if (deleteResult.affectedRows === 0) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting user: ' + error.message });
        }
    }
}
