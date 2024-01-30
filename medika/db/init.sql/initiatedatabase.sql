
   -- CREATE TABLE Users(
   --    Email VARCHAR(50),
   --    First_name VARCHAR(50) NOT NULL,
   --    Last_name VARCHAR(50) NOT NULL,
   --    Password VARCHAR(255) NOT NULL,
   --    Two_factor BOOLEAN,
   --    PRIMARY KEY(Email)
   -- );
   
   -- CREATE TABLE `treatments`(
   --    `id_treatments` int AUTO_INCREMENT,
   --    Name VARCHAR(50),
   --    Type VARCHAR(50) NOT NULL,
   --    PRIMARY KEY(id_treatments)
   -- );
   
   -- CREATE TABLE Weight(
   --    Id_weight INT AUTO_INCREMENT,
   --    Date_weight DATETIME NOT NULL,
   --    Value_weight DECIMAL(15,2) NOT NULL,
   --    PRIMARY KEY(Id_weight)
   -- );

   -- CREATE TABLE Species(
   --    Name VARCHAR(50),
   --    PRIMARY KEY(Name)
   -- );
   
   -- CREATE TABLE Breed(
   --    Name VARCHAR(50),
   --    Species_Name VARCHAR(50) NOT NULL, -- Renommé pour éviter la confusion
   --    PRIMARY KEY(Name),
   --    FOREIGN KEY(Species_Name) REFERENCES Species(Name)
   -- );
   
   -- CREATE TABLE Animals(
   --    Id_animals INT AUTO_INCREMENT,
   --    Fist_name VARCHAR(50) NOT NULL,
   --    Last_name VARCHAR(50) NOT NULL,
   --    Birthday DATE NOT NULL,
   --    Gender VARCHAR(50) NOT NULL, -- ENUM doit être défini avec des valeurs spécifiques
   --    Mutual CHAR(50),
   --    Breed_Name VARCHAR(50) NOT NULL, -- Renommé pour éviter la confusion
   --    User_Email VARCHAR(50) NOT NULL, -- Renommé pour éviter la confusion
   --    PRIMARY KEY(Id_animals),
   --    UNIQUE(Mutual),
   --    FOREIGN KEY(Breed_Name) REFERENCES Breed(Name),
   --    FOREIGN KEY(User_Email) REFERENCES Users(Email)
   -- );
   
   -- CREATE TABLE Photos(
   --    Id_Photos INT AUTO_INCREMENT,
   --    slug VARCHAR(50) NOT NULL,
   --    Id_animals INT,
   --    User_Email VARCHAR(50),
   --    PRIMARY KEY(Id_Photos),
   --    UNIQUE(slug),
   --    FOREIGN KEY(Id_animals) REFERENCES Animals(Id_animals),
   --    FOREIGN KEY(User_Email) REFERENCES Users(Email)
   -- );

CREATE TABLE users(
   email VARCHAR(50),
   first_name VARCHAR(50) NOT NULL,
   last_name VARCHAR(50) NOT NULL,
   password VARCHAR(255) NOT NULL,
   two_factor BOOLEAN,
   PRIMARY KEY(email)
);

CREATE TABLE treatments(
   id_treatments INT AUTO_INCREMENT,
   name VARCHAR(50),
   type ENUM('type1', 'type2', 'type3') NOT NULL, -- Remplacez 'type1', 'type2', 'type3' par les types de traitement réels.
   PRIMARY KEY(id_treatments)
);

CREATE TABLE weight(
   id_weight INT AUTO_INCREMENT,
   date_weight DATETIME NOT NULL,
   value_weight DECIMAL(15,2) NOT NULL,
   PRIMARY KEY(id_weight)
);

CREATE TABLE species(
   name VARCHAR(50),
   PRIMARY KEY(name)
);

CREATE TABLE breed(
   name VARCHAR(50),
   reference_weight DECIMAL(15,0),
   species_name VARCHAR(50) NOT NULL,
   PRIMARY KEY(name),
   FOREIGN KEY(species_name) REFERENCES species(name)
);

CREATE TABLE animals(
   id_animals INT AUTO_INCREMENT,
   first_name VARCHAR(50) NOT NULL,
   last_name VARCHAR(50) NOT NULL,
   birthday DATE NOT NULL,
   gender ENUM('Male', 'Female', 'Other') NOT NULL, -- Ajustez les valeurs selon votre besoin.
   mutual CHAR(50),
   breed_name VARCHAR(50) NOT NULL,
   user_email VARCHAR(50) NOT NULL,
   PRIMARY KEY(id_animals),
   UNIQUE(mutual),
   FOREIGN KEY(breed_name) REFERENCES breed(name),
   FOREIGN KEY(user_email) REFERENCES users(email)
);

CREATE TABLE photos(
   id_photos INT AUTO_INCREMENT,
   slug VARCHAR(50) NOT NULL,
   id_animals INT,
   user_email VARCHAR(50),
   PRIMARY KEY(id_photos),
   UNIQUE(slug),
   FOREIGN KEY(id_animals) REFERENCES animals(id_animals),
   FOREIGN KEY(user_email) REFERENCES users(email)
);

CREATE TABLE weigh(
   id_animals INT,
   id_weight INT,
   PRIMARY KEY(id_animals, id_weight),
   FOREIGN KEY(id_animals) REFERENCES animals(id_animals),
   FOREIGN KEY(id_weight) REFERENCES weight(id_weight)
);

CREATE TABLE vaccinate(
   id_animals INT,
   id_treatments INT,
   PRIMARY KEY(id_animals, id_treatments),
   FOREIGN KEY(id_animals) REFERENCES animals(id_animals),
   FOREIGN KEY(id_treatments) REFERENCES treatments(id_treatments)
);

                      