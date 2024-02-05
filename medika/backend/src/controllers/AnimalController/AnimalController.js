import AnimalRepository from '../../repositories/AnimalRepository.js';
import pool  from '../../../app/database_sql.js';
// const animalRepository = new AnimalRepository(pool.promise());
// const animalController = new AnimalController(animalRepository);


export default class AnimalController {
    constructor(animalRepository) {
        this.animalRepository = animalRepository;
    }

    async addAnimal(req, res) {
        try {
            const { breedname, lastname, firstname, birthdate, gender, weight, userId } = req.body;
            // Assurez-vous que `userId` est correctement récupéré. Cela peut dépendre de votre système d'authentification.

            // Vérification si un animal avec le même nom pour le même utilisateur existe déjà
            const existingAnimal = await this.animalRepository.findAnimalByNameAndUserId(firstname, userId);
            if (existingAnimal) {
                return res.status(400).json({ message: "Un animal avec ce nom existe déjà pour cet utilisateur." });
            }

            // Si aucun animal identique trouvé, procéder à l'ajout
            await this.animalRepository.add({ breedname, lastname, firstname, birthdate, gender, weight });
            
            res.status(201).json({ message: 'Animal ajouté avec succès !' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAnimalById(req, res) {
        try {
            const { id } = req.params;
            const animal = await this.animalRepository.getAnimalById(id);
            if (animal) {
                res.json(animal);
            } else {
                res.status(404).json({ message: 'Aucun animal trouvé!' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    
    async updateAnimalById(req, res) {
        try {
            const { id } = req.params;
            const updateResult = await this.animalRepository.updateAnimalById(id, req.body);
            if (updateResult.affectedRows > 0) {
                res.json({ message: 'Mise à jour du profil de la bestiole!' });
            } else {
                res.status(404).json({ message: 'On a pas trouvé la bestiole!' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    
    async deleteAnimalById(req, res) {
        try {
            const { id } = req.params;
            const deleteResult = await this.animalRepository.deleteAnimalById(id);
            if (deleteResult.affectedRows > 0) {
                res.json({ message: 'Suppression du profil de la bestiole réussie!' });
            } else {
                res.status(404).json({ message: "Aucune bestiole n'a été trouvée!" });
            }
        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la suppression de la bestiole: " + error.message });
        }
    }
    async addWeightToAnimal(req, res) {
        try {
            const { id_animals, date_weight, value_weight } = req.body;
            const addResult = await this.animalRepository.addWeight(id_animals, date_weight, value_weight);
            if (addResult.affectedRows > 0) {
                res.status(200).json({ message: 'Poids ajouté avec succès.' });
            } else {
                res.status(400).json({ message: "Erreur lors de l'ajout du poids. Aucune modification n'a été effectuée." });
            }
        } catch (error) {
            res.status(500).json({ message: "Erreur lors de l'ajout du poids: " + error.message });
        }
    }
}