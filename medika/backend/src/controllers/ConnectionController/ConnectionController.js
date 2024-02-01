const userRepo = require('../repositories/users.js');
const bcrypt = require('bcryptjs');

class ConnectionController {
    // La méthode pour afficher le formulaire de connexion
    get(req, res) {
        res.render('auth');
    }

    // La méthode pour traiter la soumission du formulaire de connexion
    async post(req, res) {
        try {
            const user = await userRepo.findOne({ email: req.body.email });
            if (user && bcrypt.compareSync(req.body.password, user.password)) {
                req.session.user = {
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    connected: true
                };
                req.flash('notify', 'Vous êtes maintenant connecté');
                res.redirect('/');
            } else {
                res.render('auth', { error: `L'identification a échoué`, email: req.body.email });
            }
        } catch (error) {
            console.error(error);
            res.render('auth', { error: "Un problème est survenu lors de la tentative de connexion." });
        }
    }
}
module.exports = ConnectionController;