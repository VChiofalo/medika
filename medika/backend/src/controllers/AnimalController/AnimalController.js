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
                res.json({ message: 'Animal updated successfully!' });
            } else {
                res.status(404).json({ message: 'Animal not found!' });
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
                res.json({ message: 'Animal deleted successfully!' });
            } else {
                res.status(404).json({ message: 'Animal not found!' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
