import PictureRepository from "../../repositories/PictureRepository.js";

export default class PictureController{
    addUserPictureProcess(req, res){
        const pictureRepository = new PictureRepository();
        if (req.errorMessage) {
            res.status(403).json({
                message: req.errorMessage,
                error: true
            })
        } else {
            pictureRepository.addUserPicture(`/assets/pictures/${req.filename}`, req.user_email).then(()=>{ 
                res.status(201).json({
                    message: `Votre image est sauvegardé`
                })
               
            }).catch((error) => {
                res.status(500).json({ 
                    message: 'Erreur :',
                    error: true
                });
            });
        }
    }

    addAnimalPictureProcess(req, res){
        const pictureRepository = new PictureRepository();
        if (req.errorMessage) {
            res.status(403).json({
                message: req.errorMessage,
                error: true
            })
        } else {
            pictureRepository.addAnimalPicture(`/assets/pictures/${req.filename}`, id_animals).then(()=>{ 
                res.status(201).json({
                    message: `Votre image est sauvegardé`
                })
               
            }).catch((error) => {
                res.status(500).json({ 
                    message: 'Erreur :'+error.message,
                    error: true
                });
            });
        }
    }
}