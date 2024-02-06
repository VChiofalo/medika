import User from '../../entity/User.js';
import UserRepository from '../../repositories/UserRepository.js';
import bcrypt from 'bcryptjs';

export default class RegisterController {
    registerUserProcess(req, res){
        let entity = new User();
        entity.setEmail(req.body.email)
            .setPassword(bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)))
            .setFirstName(req.body.firstname)
            .setLastName(req.body.lastname)
        
        try {
            const userRepo = new UserRepository();
            userRepo.existsEmail(entity.getEmail()).then((emailExist) => {
                if (emailExist) {
                    res.status(403).json({
                        message: `Adresse email déjà utilisé !`,
                        email: entity.getEmail(),
                        firstname: entity.getFirstName(),
                        lastname: entity.getLastName(),
                        error: true
                    })
                } else {
                        userRepo.add(entity).then(()=>{
                            res.status(201).json({
                                message: `Votre compte a bien été créé. Vous pouvez vous connecter avec vos identifiants !`
                            })
                        })
                    }
            })
        } catch (error) {
            res.status(500).json({ 
                message: 'Erreur lors de la création du compte',
                error: true
            });
        }
        
    }
}