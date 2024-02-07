export default class Breed{
    /** 
    * @var name string
    **/

        getName(){
            return this.name;
        }

        setName(name){
            this.name = name;
            return this;
        }

    /** 
    * @var reference_weight integer
    **/

        getReferenceWeight(){
            return this.reference_weight;
        }
    
        setReferenceWeight(reference_weight){
            this.reference_weight = reference_weight;
            return this;
        }

    /** 
    * @var species_name string
    **/

        getSpeciesName(){
            return this.species_name;  
        }
    
        setSpeciesName(species_name){
            this.species_name = species_name;
            return this;
        }
}