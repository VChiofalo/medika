export default class User{
    /** 
    * @var email string
    **/

        getEmail(){
            return this.email;
        }

        setEmail(email){
            this.email = email;
            return this;
        }

    /** 
    * @var password string
    **/

        getPassword(){
            return this.password;
        }
    
        setPassword(password){
            this.password = password;
            return this;
        }

    /** 
    * @var first_name string
    **/

        getFirstName(){
            return this.first_name;  
        }
    
        setFirstName(first_name){
            this.first_name = first_name;
            return this;
        }

    /** 
    * @var last_name string
    **/

        getLastName(){
            return this.last_name;
        }
    
        setLastName(last_name){
            this.last_name = last_name;
            return this;
        }

    /** 
    * @var two_factor boolean
    **/

        getTwoFactor(){
            return this.two_factor;
        }
    
        setTwoFactor(two_factor){
            this.two_factor = two_factor;
            return this;
        }
}