import SpeciesRepository from "../../repositories/SpeciesRepository";

export default class SpeciesController{
    getAllSpeciesProcces(req, res){
        const speciesRepository = new SpeciesRepository;
        try {
            speciesRepository.getAllSpecies().then((species)=>{
                if (species) {
                    res.status(200).json({
                        species
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