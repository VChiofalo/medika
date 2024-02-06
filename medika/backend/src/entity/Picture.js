export default class Picture{
    /** 
    * @var id_photos integer
    **/

        getId(){
            return this.id_photos;
        }

    /** 
    * @var slug string
    **/

        getSlug(){
            return this.slug;
        }
    
        setSlug(slug){
            this.slug = slug;
            return this;
        }

    /** 
    * @var id_animals string
    **/

        getIdAnimals(){
            return this.id_animals;  
        }
    
        setIdAnimals(id_animals){
            this.id_animals = id_animals;
            return this;
        }

    /** 
    * @var user_email string
    **/

        getUserEmail(){
            return this.user_email;
        }
    
        setUserEmail(user_email){
            this.user_email = user_email;
            return this;
        }
}