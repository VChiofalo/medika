import BreedRepository from "../../repositories/BreedRpository.js"

export default class BreedController{
    async getBreedProccess(req, res){
        const breedRepository = new BreedRepository();
        try {
            breedRepository.getBreedBySpecies(req.body.species_name).then((breeds)=>{
                if (breeds) {
                    breeds = breeds.map((breed)=> breed.name)
                    console.log("breeds : ", breeds);
                    res.status(200).json({
                        breeds
                    })
                } else {
                    res.status(404).json({
                        message: `Erreur`,
                        error: true
                    })
                }
            })
        } catch (error) {
            res.status(500).json({ 
                message: 'Erreur',
                error: true
            });
        }
    }
}