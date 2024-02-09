import UserRepository from "../../repositories/UserRepository.js";

export default class UserController {

    async getUserByEmail(req, res) {
        const userRepository = new UserRepository();
        try {
            const user = await userRepository.getUserByEmail(req.user_email);
            if (!user) {
                return res.status(404).json({
                    message: 'Utilisateur introuvable',
                    error: true
                });
            }
            res.status(202).json(user);
        } catch (error) {
            res.status(500).json({
                message: 'Utilisateur introuvable',
                error: true
            });
        }
    }

    async updateUserByEmail(req, res) {
        const userRepository = new UserRepository();
        try {
            const { email } = req.params;
            const { first_name, last_name, password, two_factor } = req.body;
            // Encore une fois, pensez à hasher le mot de passe si nécessaire
            const updateResult = await userRepository.updateUserByEmail({ first_name, last_name, password, two_factor }, email);
            if (updateResult.affectedRows === 0) {
                return res.status(404).json({
                    message: 'Utilisateur introuvable',
                    error: true
                });
            }
            res.status(202).json({ message: 'Utilisateur mis à jour avec succès' });
        } catch (error) {
            res.status(500).json({
                message: 'Impossible de mettre à jour l\`utilisateur',
                error: true
            });
        }
    }

    async deleteUserByEmail(req, res) {
        const userRepository = new UserRepository();
        try {
            const { email } = req.params;
            const deleteResult = await userRepository.deleteUserByEmail(email);
            if (deleteResult.affectedRows === 0) {
                return res.status(404).json({ message: 'Utilisateur introuvable' });
            }
            res.status(202).json({ message: 'Utilisateur supprimer avec succès' });
        } catch (error) {
            res.status(500).json({
                message: 'Impossible de supprimer l\`utilisateur',
                error: true
            });
        }
    }
}
