import mysql from 'mysql2/promise';

(async () => {
  const connection = await mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: 'password', 
    database: 'medika' 
  });
  

  // Liste de vos instructions SQL pour créer des tables
  const tableCreationQueries = [
   CREATE TABLE Users(
      Email VARCHAR(50),
      First_name VARCHAR(50) NOT NULL,
      Last_name VARCHAR(50) NOT NULL,
      Password VARCHAR(255) NOT NULL,
      Two_factor BOOLEAN,
      PRIMARY KEY(Email)
   ),
   
   CREATE TABLE Treatments(
      Id_treatments INT AUTO_INCREMENT,
      Name VARCHAR(50),
      Type VARCHAR(50) NOT NULL, -- ENUM doit être défini avec des valeurs spécifiques
      PRIMARY KEY(Id_treatments)
   ),
   
   CREATE TABLE Weight(
      Id_weight INT AUTO_INCREMENT,
      Date_weight DATETIME NOT NULL,
      Value_weight DECIMAL(15,2) NOT NULL,
      PRIMARY KEY(Id_weight)
   ),
   
   CREATE TABLE Species(
      Name VARCHAR(50),
      PRIMARY KEY(Name)
   ),
   
   CREATE TABLE Breed(
      Name VARCHAR(50),
      Species_Name VARCHAR(50) NOT NULL, -- Renommé pour éviter la confusion
      PRIMARY KEY(Name),
      FOREIGN KEY(Species_Name) REFERENCES Species(Name)
   ),
   
   CREATE TABLE Animals(
      Id_animals INT AUTO_INCREMENT,
      Fist_name VARCHAR(50) NOT NULL,
      Last_name VARCHAR(50) NOT NULL,
      Birthday DATE NOT NULL,
      Gender VARCHAR(50) NOT NULL, -- ENUM doit être défini avec des valeurs spécifiques
      Mutual CHAR(50),
      Breed_Name VARCHAR(50) NOT NULL, -- Renommé pour éviter la confusion
      User_Email VARCHAR(50) NOT NULL, -- Renommé pour éviter la confusion
      PRIMARY KEY(Id_animals),
      UNIQUE(Mutual),
      FOREIGN KEY(Breed_Name) REFERENCES Breed(Name),
      FOREIGN KEY(User_Email) REFERENCES Users(Email)
   ),
   
   CREATE TABLE Photos(
      Id_Photos INT AUTO_INCREMENT,
      slug VARCHAR(50) NOT NULL,
      Id_animals INT,
      User_Email VARCHAR(50),
      PRIMARY KEY(Id_Photos),
      UNIQUE(slug),
      FOREIGN KEY(Id_animals) REFERENCES Animals(Id_animals),
      FOREIGN KEY(User_Email) REFERENCES Users(Email)
   ),
   CREATE TABLE Users(
      Email VARCHAR(50),
      First_name VARCHAR(50) NOT NULL,
      Last_name VARCHAR(50) NOT NULL,
      Password VARCHAR(255) NOT NULL,
      Two_factor BOOLEAN,
      PRIMARY KEY(Email)
   ),
   CREATE TABLE Treatments(
      Id_treatments INT AUTO_INCREMENT,
      Name VARCHAR(50),
      Type VARCHAR(50) NOT NULL, -- ENUM doit être défini avec des valeurs spécifiques
      PRIMARY KEY(Id_treatments)
   );
   
   CREATE TABLE Weight(
      Id_weight INT AUTO_INCREMENT,
      Date_weight DATETIME NOT NULL,
      Value_weight DECIMAL(15,2) NOT NULL,
      PRIMARY KEY(Id_weight)
   ),
   
   CREATE TABLE Species(
      Name VARCHAR(50),
      PRIMARY KEY(Name)
   ),
   
   CREATE TABLE Breed(
      Name VARCHAR(50),
      Species_Name VARCHAR(50) NOT NULL, -- Renommé pour éviter la confusion
      PRIMARY KEY(Name),
      FOREIGN KEY(Species_Name) REFERENCES Species(Name)
   ),
   
   CREATE TABLE Animals(
      Id_animals INT AUTO_INCREMENT,
      Fist_name VARCHAR(50) NOT NULL,
      Last_name VARCHAR(50) NOT NULL,
      Birthday DATE NOT NULL,
      Gender VARCHAR(50) NOT NULL, -- ENUM doit être défini avec des valeurs spécifiques
      Mutual CHAR(50),
      Breed_Name VARCHAR(50) NOT NULL, -- Renommé pour éviter la confusion
      User_Email VARCHAR(50) NOT NULL, -- Renommé pour éviter la confusion
      PRIMARY KEY(Id_animals),
      UNIQUE(Mutual),
      FOREIGN KEY(Breed_Name) REFERENCES Breed(Name),
      FOREIGN KEY(User_Email) REFERENCES Users(Email)
   ),
   
   CREATE TABLE Photos(
      Id_Photos INT AUTO_INCREMENT,
      slug VARCHAR(50) NOT NULL,
      Id_animals INT,
      User_Email VARCHAR(50),
      PRIMARY KEY(Id_Photos),
      UNIQUE(slug),
      FOREIGN KEY(Id_animals) REFERENCES Animals(Id_animals),
      FOREIGN KEY(User_Email) REFERENCES Users(Email)
   ),
  ];

try {
    for (const query of tableCreationQueries) {
      await connection.execute(query);
    }
    console.log('Toutes les tables ont été créées avec succès.');
  } catch (error) {
    console.error('Erreur lors de la création des tables :', error);
  } finally {
    await connection.end();
  }
})();
