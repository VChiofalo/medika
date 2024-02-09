import AnimalRepository from '../../repositories/AnimalRepository.js';
import Animal from '../../entity/Animal.js';
export default class AnimalController {

    addAnimal(req, res) {
        const animalRepository = new AnimalRepository();
        let entity = new Animal();
        entity.setFirstName(req.body.first_name)
            .setLastName(req.body.last_name)  
            .setBirthday(req.body.birthday)
            .setGender(req.body.gender) 
            .setMutual(req.body.mutual) 
            .setBreedName(req.body.breed_name) 
            .setUserEmail(req.user_email);
      
        animalRepository.findAnimalByNameAndUserId(req.body.first_name, req.user_email).then((existingAnimal) => {
            if (existingAnimal) {
                return res.status(400).json({
                    message: "Un animal avec ce nom existe déjà pour cet utilisateur.",
                    error: true
                });
            } else {
                animalRepository.addAnimal(entity).then(() => {
                    return res.status(200).json({
                        message: "On va créer un nouveau chien."
                    }); 
                })
            }
        }).catch((error) => {
            res.status(500).json({
                message: `Erreur`,
                error: true
            });
        });
    }


    async getAnimalById(req, res) {
        const animalRepository = new AnimalRepository();
        try {
            const animal = await animalRepository.getAnimalById(req.body.id_animals);
            if (animal) {
                res.status(200).json(animal);
            } else {
                res.status(404).json({
                    message: 'Aucun animal trouvé!',
                    error: true
                });
            }
        } catch (error) {
            res.status(500).json({
                message: `Erreur`,
                error: true
            });
        }
    }
    
    async updateAnimalById(req, res) {
        const animalRepository = new AnimalRepository();
        try {
            const { id } = req.params;
            const updateResult = await animalRepository.updateAnimalById(id, req.body);
            if (updateResult.affectedRows > 0) {
                res.status(202).json({ message: 'Mise à jour du profil de la bestiole!' });
            } else {
                res.status(404).json({
                    message: 'On a pas trouvé la bestiole!',
                    error: true
                });
            }
        } catch (error) {
            res.status(500).json({
                message: `Erreur`,
                error: true
            });
        }
    }
    
    async deleteAnimalById(req, res) {
        const animalRepository = new AnimalRepository();
        try {
            const { id } = req.params;
            const deleteResult = await animalRepository.deleteAnimalById(id);
            if (deleteResult.affectedRows > 0) {
                res.status(202).json({ message: 'Suppression du profil de la bestiole réussie!' });
            } else {
                res.status(404).json({
                    message: "Aucune bestiole n'a été trouvée!",
                    error: true
                });
            }
        } catch (error) {
            res.status(500).json({
                message: "Erreur lors de la suppression de la bestiole: ",
                error: true
            });
        }
    }

    async addWeightToAnimal(req, res) {
        const animalRepository = new AnimalRepository();
        try {
            const { id_animals, date_weight, value_weight } = req.body;
            const addResult = await animalRepository.addWeight(id_animals, date_weight, value_weight);
            if (addResult.affectedRows > 0) {
                res.status(202).json({ message: 'Poids ajouté avec succès.' });
            } else {
                res.status(400).json({
                    message: "Erreur lors de l'ajout du poids. Aucune modification n'a été effectuée.",
                    error: true
                });
            }
        } catch (error) {
            res.status(500).json({
                message: "Erreur lors de l'ajout du poids: ",
                error: true
            });
        }
    }
}