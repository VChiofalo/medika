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
            const animal = req.body;
            await this.animalRepository.add(animal);
            res.status(200).json({ message: 'Animal added successfully!' });
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
                res.status(404).json({ message: 'Animal not found!' });
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