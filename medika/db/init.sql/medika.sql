-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : db:3306
-- Généré le : ven. 02 fév. 2024 à 14:24
-- Version du serveur : 8.2.0
-- Version de PHP : 8.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `medika`
--

-- --------------------------------------------------------

--
-- Structure de la table `animals`
--

CREATE TABLE `animals` (
  `id_animals` int NOT NULL,
  `first_name` varchar(60) NOT NULL,
  `last_name` varchar(60) NOT NULL,
  `birthday` date NOT NULL,
  `gender` enum('Male','Female','Other') NOT NULL,
  `mutual` char(50) DEFAULT NULL,
  `breed_name` varchar(50) NOT NULL,
  `user_email` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `animal_treatments`
--

CREATE TABLE `animal_treatments` (
  `id_animals` int NOT NULL,
  `id_treatments` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `animal_weigh`
--

CREATE TABLE `animal_weigh` (
  `id_animals` int NOT NULL,
  `id_weight` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `breed`
--

CREATE TABLE `breed` (
  `name` varchar(50) NOT NULL,
  `reference_weight` decimal(15,0) DEFAULT NULL,
  `species_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `breed`
--

INSERT INTO `breed` (`name`, `reference_weight`, `species_name`) VALUES
('Alca torda', 1, 'pinguin'),
('Bleu Russe', 4, 'chat'),
('Border Collie', 22, 'chien'),
('Européen', 4, 'chat'),
('Shiba Inu', 8, 'chien');

-- --------------------------------------------------------

--
-- Structure de la table `photos`
--

CREATE TABLE `photos` (
  `id_photos` int NOT NULL,
  `slug` varchar(255) NOT NULL,
  `id_animals` int DEFAULT NULL,
  `user_email` varchar(120) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `species`
--

CREATE TABLE `species` (
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `species`
--

INSERT INTO `species` (`name`) VALUES
('chat'),
('chien'),
('pinguin');

-- --------------------------------------------------------

--
-- Structure de la table `treatments`
--

CREATE TABLE `treatments` (
  `id_treatments` int NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `type` enum('type1','type2','type3') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `email` varchar(120) NOT NULL,
  `first_name` varchar(60) NOT NULL,
  `last_name` varchar(60) NOT NULL,
  `password` varchar(255) NOT NULL,
  `two_factor` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`email`, `first_name`, `last_name`, `password`, `two_factor`) VALUES
('test@test.fr', 'jean', 'dupont', '$2a$10$/ok0slJSrqbZJFNw2HVE.ubiToFc9ArZO/SI9tz9G8rKZ0/cw.o32', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `weight`
--

CREATE TABLE `weight` (
  `id_weight` int NOT NULL,
  `date_weight` datetime NOT NULL,
  `value_weight` decimal(15,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `animals`
--
ALTER TABLE `animals`
  ADD PRIMARY KEY (`id_animals`),
  ADD UNIQUE KEY `mutual` (`mutual`),
  ADD KEY `breed_name` (`breed_name`),
  ADD KEY `user_email` (`user_email`);

--
-- Index pour la table `animal_treatments`
--
ALTER TABLE `animal_treatments`
  ADD PRIMARY KEY (`id_animals`,`id_treatments`),
  ADD KEY `id_treatments` (`id_treatments`);

--
-- Index pour la table `animal_weigh`
--
ALTER TABLE `animal_weigh`
  ADD PRIMARY KEY (`id_animals`,`id_weight`),
  ADD KEY `id_weight` (`id_weight`);

--
-- Index pour la table `breed`
--
ALTER TABLE `breed`
  ADD PRIMARY KEY (`name`),
  ADD KEY `species_name` (`species_name`);

--
-- Index pour la table `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id_photos`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD KEY `id_animals` (`id_animals`),
  ADD KEY `user_email` (`user_email`);

--
-- Index pour la table `species`
--
ALTER TABLE `species`
  ADD PRIMARY KEY (`name`);

--
-- Index pour la table `treatments`
--
ALTER TABLE `treatments`
  ADD PRIMARY KEY (`id_treatments`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email`);

--
-- Index pour la table `weight`
--
ALTER TABLE `weight`
  ADD PRIMARY KEY (`id_weight`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `animals`
--
ALTER TABLE `animals`
  MODIFY `id_animals` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `photos`
--
ALTER TABLE `photos`
  MODIFY `id_photos` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `treatments`
--
ALTER TABLE `treatments`
  MODIFY `id_treatments` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `weight`
--
ALTER TABLE `weight`
  MODIFY `id_weight` int NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `animals`
--
ALTER TABLE `animals`
  ADD CONSTRAINT `animals_ibfk_1` FOREIGN KEY (`breed_name`) REFERENCES `breed` (`name`),
  ADD CONSTRAINT `animals_ibfk_2` FOREIGN KEY (`user_email`) REFERENCES `users` (`email`);

--
-- Contraintes pour la table `animal_treatments`
--
ALTER TABLE `animal_treatments`
  ADD CONSTRAINT `animal_treatments_ibfk_1` FOREIGN KEY (`id_animals`) REFERENCES `animals` (`id_animals`),
  ADD CONSTRAINT `animal_treatments_ibfk_2` FOREIGN KEY (`id_treatments`) REFERENCES `treatments` (`id_treatments`);

--
-- Contraintes pour la table `animal_weigh`
--
ALTER TABLE `animal_weigh`
  ADD CONSTRAINT `animal_weigh_ibfk_1` FOREIGN KEY (`id_animals`) REFERENCES `animals` (`id_animals`),
  ADD CONSTRAINT `animal_weigh_ibfk_2` FOREIGN KEY (`id_weight`) REFERENCES `weight` (`id_weight`);

--
-- Contraintes pour la table `breed`
--
ALTER TABLE `breed`
  ADD CONSTRAINT `breed_ibfk_1` FOREIGN KEY (`species_name`) REFERENCES `species` (`name`);

--
-- Contraintes pour la table `photos`
--
ALTER TABLE `photos`
  ADD CONSTRAINT `photos_ibfk_1` FOREIGN KEY (`id_animals`) REFERENCES `animals` (`id_animals`),
  ADD CONSTRAINT `photos_ibfk_2` FOREIGN KEY (`user_email`) REFERENCES `users` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
