import User from '../../entity/User.js';
import UserRepository from '../../repositories/UserRepository.js';
import bcrypt from 'bcryptjs';

export default class RegisterController {
    registerUserProcess(req, res){
        let entity = new User();
        entity.setEmail(req.body.email)
            .setPassword(bcrypt.hashSync(request.body.password, bcrypt.genSaltSync(10)))
            .setFirstName(req.body.firstname)
            .setLastName(req.body.lastname)

        const userRepo = new UserRepository();
        if (emailExist) {
            res.json({
                error: `L'adresse email déjà utilisé !`,
                email: entity.getEmail(),
                firstname: entity.getFirstName(),
                lastname: entity.getLastName()
            })
        } else {
            if (req.body.password != req.body.passwordConfirm) {
                res.json({
                    error: `Les mots de passes ne correspondent pas !`,
                    email: entity.getEmail(),
                    firstname: entity.getFirstName(),
                    lastname: entity.getLastName()
                })
            } else {
                userRepo.add(entity).then(()=>{
                    res.json({
                        notify: `Votre compte a bien été créé. Vous pouvez vous connecter avec vos identifiants !`
                    })
                })
            }
        }
    }
}