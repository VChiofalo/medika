/* const userRepo = require('../repositories/users.js')
const bcrypt = require('bcryptjs')

exports.get = (req, res) => {
    res.render('auth')
}


exports.post = (req, res) => {
    userRepo.findOne({ email :req.body.email }).then((user) => {
        if(user) {
            if(bcrypt.compareSync(req.body.password, user.password)) {
                req.session.user = {
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    connected: true
                };
                
                req.flash('notify', `Vous êtes maintenant connecté`);
                res.redirect('/')
                return;
            }
        }
        res.render('auth', {error: `L'identification a échoué`, email:req.body.email })        
    })
    .catch(error => {
        console.error(error);
        res.render('auth', { error: "Un problème est survenu lors de la tentative de connexion." });
});
}; */