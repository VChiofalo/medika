import AnimalRepository from '../../repositories/AnimalRepository.js';

export default class AnimalController {

    async addAnimal(req, res) {
        const animalRepository = new AnimalRepository();
        try {
            const { first_name, last_name, birthdate, gender,  mutual,  user_email } = req.body;
            const useremail = req.user.email;
            // Assurez-vous que `userId` est correctement récupéré. Cela peut dépendre de votre système d'authentification.

            // Vérification si un animal avec le même nom pour le même utilisateur existe déjà
            const existingAnimal = await animalRepository.findAnimalByNameAndUserId(first_name, userId, user_email);
            if (existingAnimal) {
                return res.status(400).json({
                    message: "Un animal avec ce nom existe déjà pour cet utilisateur.",
                    error: true
                });
            }

            // Si aucun animal identique trouvé, procéder à l'ajout
            await animalRepository.add({first_name, last_name, birthdate, gender,  mutual,  user_email });
            res.status(201).json({ message: 'Animal ajouté avec succès !' });

        } catch (error) {
            res.status(500).json({
                message: `Erreur`,
                error: true
            });
        }
    }

    async getAnimalById(req, res) {
        const animalRepository = new AnimalRepository();
        try {
            const { id } = req.params;
            const animal = await animalRepository.getAnimalById(id);
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