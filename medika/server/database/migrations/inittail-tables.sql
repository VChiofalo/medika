-- server/db/migrations/001-initial-tables.sql

CREATE TABLE Users(
   Email VARCHAR(50),
   First_name VARCHAR(50) NOT NULL,
   Last_name VARCHAR(50) NOT NULL,
   Password VARCHAR(255) NOT NULL,
   Two_factor BOOLEAN,
   PRIMARY KEY(Email)
);

CREATE TABLE Treatments(
   Id_treatments INT AUTO_INCREMENT,
   Name VARCHAR(50),
   Type ENUM('Type1', 'Type2', 'Type3') NOT NULL, -- Remplacez par vos types de traitements réels
   PRIMARY KEY(Id_treatments)
);

CREATE TABLE Weight(
   Id_weight INT AUTO_INCREMENT,
   Date_weight DATETIME NOT NULL,
   Value_weight DECIMAL(15,2) NOT NULL,
   PRIMARY KEY(Id_weight)
);

CREATE TABLE Species(
   Name VARCHAR(50),
   PRIMARY KEY(Name)
);

CREATE TABLE Breed(
   Name VARCHAR(50),
   Species_name VARCHAR(50) NOT NULL,
   PRIMARY KEY(Name),
   FOREIGN KEY(Species_name) REFERENCES Species(Name)
);

CREATE TABLE Animals(
   Id_animals INT AUTO_INCREMENT,
   Fist_name VARCHAR(50) NOT NULL,
   Last_name VARCHAR(50) NOT NULL,
   Birthday DATE NOT NULL,
   Gender ENUM('Male', 'Female', 'Other') NOT NULL, -- Remplacez par vos genres réels
   Mutual CHAR(50),
   Breed_name VARCHAR(50) NOT NULL,
   User_email VARCHAR(50) NOT NULL,
   PRIMARY KEY(Id_animals),
   FOREIGN KEY(Breed_name) REFERENCES Breed(Name),
   FOREIGN KEY(User_email) REFERENCES Users(Email)
);

CREATE TABLE Photos(
   Id_Photos INT AUTO_INCREMENT,
   slug VARCHAR(50) NOT NULL,
   Id_animals INT,
   User_email VARCHAR(50),
   PRIMARY KEY(Id_Photos),
   UNIQUE(slug),
   FOREIGN KEY(Id_animals) REFERENCES Animals(Id_animals),
   FOREIGN KEY(User_email) REFERENCES Users(Email)
);

CREATE TABLE Weigh(
   Id_animals INT,
   Id_weight INT,
   PRIMARY KEY(Id_animals, Id_weight),
   FOREIGN KEY(Id_animals) REFERENCES Animals(Id_animals),
   FOREIGN KEY(Id_weight) REFERENCES Weight(Id_weight)
);

CREATE TABLE Vaccinate(
   Id_animals INT,
   Id_treatments INT,
   PRIMARY KEY(Id_animals, Id_treatments),
   FOREIGN KEY(Id_animals) REFERENCES Animals(Id_animals),
   FOREIGN KEY(Id_treatments) REFERENCES Treatments(Id_treatments)
);
