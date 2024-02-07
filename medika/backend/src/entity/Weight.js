export default class Weight {
    /** 
    * @var id integer
    **/

        getId(){
            return this.id_weight;
        }

    /** 
    * @var date date
    **/

        getDate(){
            return this.date_weight;
        }
    
        setDate(date_weight){
            this.date_weight = date_weight;
            return this;
        }

    /** 
    * @var value_weight integer
    **/

        get(){
            return this.value_weight;  
        }
    
        setFirstName(value_weight){
            this.value_weight = value_weight;
            return this;
        }
}