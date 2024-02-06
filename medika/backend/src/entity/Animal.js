export default class Animal {

    getId() {
        return this.id_animals;
    }

    getFirstName() {
        return this.first_name;
    }

    setFirstName(first_name) {
        this.first_name = first_name;
        return this;
    }

    getLastName() {
        return this.last_name;
    }

    setLastName(last_name) {
        this.last_name = last_name;
        return this;
    }

    getBirthday() {
        return this.birthday;
    }

    setBirthday(birthday) {
        this.birthday = birthday;
        return this;
    }

    getGender() {
        return this.gender;
    }

    setGender(gender) {
        this.gender = gender;
        return this;
    }

    getMutual() {
        return this.mutual;
    }

    setMutual(mutual) {
        this.mutual = mutual;
        return this;
    }

    getBreedName() {
        return this.breed_name;
    }

    setBreedName(breed_name) {
        this.breed_name = breed_name;
        return this;
    }

    getUserEmail() {
        return this.user_email;
    }

    setUserEmail(user_email) {
        this.user_email = user_email;
        return this;
    }
    
    getWeight() {
        return this.weight;
    }
    setWeight(weight) {
        this.weight = weight;
        return this;
    }
    
}