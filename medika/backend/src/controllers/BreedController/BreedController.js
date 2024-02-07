import BreedRepository from "../../repositories/BreedRpository"

export default class BreedController{
    async getBreedProccess(req, res){
        const breedRepository = new BreedRepository();
        try {
            breedRepository.getBreedBySpecies(req.body.species).then((breeds)=>{
                if (breeds) {
                    res.status(200).json({
                        breeds
                    })
                } else {
                    res.status(410).json({
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