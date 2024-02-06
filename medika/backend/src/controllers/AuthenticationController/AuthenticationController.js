import UserRepository from '../../repositories/UserRepository.js';
import bcrypt from 'bcryptjs';
import jwt  from 'jsonwebtoken';

export default class AuthenticationController {
    loginProcess(req, res){
        const userRepo = new UserRepository();
        try {
            userRepo.getUserByEmail(req.body.email).then((infoUser)=>{
                if (infoUser) {
                    if (bcrypt.compareSync(req.body.password, infoUser.password)) {
                        let accessToken = jwt.sign({email: infoUser.email, firstname: infoUser.first_name, lastname: infoUser.last_name}, process.env.JWT_SECRET, {expiresIn: 604800});
                        res.cookie('token', accessToken, {httpOnly: true, secure: (process.env.APP_ENV === 'production') }).status(201).json({
                            message: 'Vous êtes connecté',
                            jwt: accessToken
                        })
                    } else {
                        res.status(403).json({
                            message: 'Identifiants incorrects',
                            error: true
                        })
                    }
                } else {
                    res.status(403).json({
                        message: 'Identifiants incorrects',
                        error: true
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