-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 13, 2020 at 09:50 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `carapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `car`
--

CREATE TABLE `car` (
  `id` int(11) NOT NULL,
  `renter_id` int(11) DEFAULT NULL,
  `type_id` int(11) DEFAULT NULL,
  `features` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '(DC2Type:json)',
  `is_archived` tinyint(1) NOT NULL,
  `price` double NOT NULL,
  `available` tinyint(1) NOT NULL,
  `updated_at` datetime NOT NULL,
  `image_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_original_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_mime_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_size` int(11) DEFAULT NULL,
  `image_dimensions` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '(DC2Type:simple_array)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `car`
--

INSERT INTO `car` (`id`, `renter_id`, `type_id`, `features`, `is_archived`, `price`, `available`, `updated_at`, `image_name`, `image_original_name`, `image_mime_type`, `image_size`, `image_dimensions`) VALUES
(1, 2, 1, '{\"boite\":\"Automatique \\u00e0 simple embrayage\",\"moteur\":\"Essence\",\"carburant\":\"SP95-E10\"}', 0, 60, 1, '2020-11-13 19:01:10', 'a81-5faec9e627b09126646430.jpg', 'a81.jpg', 'image/jpeg', 9718, '314,160'),
(2, 2, 1, '{\"boite\":\"Automatique \\u00e0 double embrayage\",\"moteur\":\"Essence\",\"carburant\":\"SP98\"}', 0, 140, 1, '2020-11-13 19:01:45', 'a84-5faeca09a241e948195906.jpg', 'a84.jpg', 'image/jpeg', 146683, '1505,903'),
(3, 2, 1, '{\"boite\":\"Automatique \\u00e0 double embrayage\",\"moteur\":\"Essence\",\"carburant\":\"SP98\"}', 0, 45, 0, '2020-11-13 19:02:08', 'a82-5faeca20ba9e7378750592.jpg', 'a82.jpg', 'image/jpeg', 563502, '1400,1050'),
(4, 2, 1, '{\"boite\":\"Automatique \\u00e0 double embrayage\",\"moteur\":\"Essence\",\"carburant\":\"SP95\"}', 0, 90, 1, '2020-11-13 19:03:45', 'a83-5faeca8116279877604631.jpg', 'a83.jpg', 'image/jpeg', 163423, '1280,853'),
(5, 2, 1, '{\"boite\":\"Automatique \\u00e0 double embrayage\",\"moteur\":\"Essence\",\"carburant\":\"SP98\"}', 0, 97, 0, '2020-11-13 19:04:19', 'a86-5faecaa33c256747268361.jpg', 'a86.jpg', 'image/jpeg', 172068, '1024,575'),
(6, 2, 1, '{\"boite\":\"Automatique \\u00e0 simple embrayage\",\"moteur\":\"Essence\",\"carburant\":\"GPLc\"}', 0, 180, 1, '2020-11-13 19:05:28', 'a86-5faecae89fa68150017916.jpg', 'a86.jpg', 'image/jpeg', 76694, '945,493'),
(7, 2, 1, '{\"boite\":\"Automatique \\u00e0 double embrayage\",\"moteur\":\"Essence\",\"carburant\":\"SP98\"}', 0, 120, 1, '2020-11-13 19:06:22', 'a87-5faecb1ee77b7478585446.jpg', 'a87.JPG', 'image/jpeg', 59769, '522,280'),
(8, 2, 1, '{\"boite\":\"Automatique \\u00e0 double embrayage\",\"moteur\":\"Essence\",\"carburant\":\"SP95-E10\"}', 0, 38, 1, '2020-11-13 19:06:56', 'a88-5faecb40a2e4b586188866.jpg', 'a88.jpg', 'image/jpeg', 7325, '259,194'),
(9, 2, 2, '{\"boite\":\"Automatique \\u00e0 convertisseur de couple\",\"moteur\":\"Essence\",\"carburant\":\"GPLc\"}', 0, 43, 1, '2020-11-13 19:11:27', 'bm1-5faecc4f7a375600459794.jpg', 'bm1.jpg', 'image/jpeg', 18070, '280,154'),
(10, 2, 2, '{\"boite\":\"Automatique \\u00e0 double embrayage\",\"moteur\":\"Essence\",\"carburant\":\"SP95-E10\"}', 0, 67, 0, '2020-11-13 19:11:50', 'bm4-5faecc66cd068888571864.jpg', 'bm4.jpg', 'image/jpeg', 9409, '297,170'),
(11, 2, 2, '{\"boite\":\"Automatique \\u00e0 convertisseur de couple\",\"moteur\":\"Diesel\",\"carburant\":\"SP95\"}', 0, 89, 1, '2020-11-13 19:12:11', 'bmw2-5faecc7b96d0f559698925.jpg', 'bmw2.jpg', 'image/jpeg', 35196, '612,408'),
(12, 2, 2, '{\"boite\":\"Automatique \\u00e0 simple embrayage\",\"moteur\":\"GPL\",\"carburant\":\"Gazole\"}', 0, 67, 1, '2020-11-13 19:12:35', 'bmw-5faecc93758e3363372385.jpg', 'bmw.jpg', 'image/jpeg', 26115, '450,338'),
(13, 2, 2, '{\"boite\":\"Automatique \\u00e0 convertisseur de couple\",\"moteur\":\"Essence\",\"carburant\":\"Gazole\"}', 0, 97, 1, '2020-11-13 19:12:56', 'bm5-5faecca8cd528008441121.jpg', 'bm5.jpg', 'image/jpeg', 34397, '690,405'),
(14, 2, 3, '{\"boite\":\"Manuelle\",\"moteur\":\"Essence\",\"carburant\":\"Gazole\"}', 0, 30, 1, '2020-11-13 19:16:02', 'c1-5faecd62a7932220164855.jpg', 'c1.jpg', 'image/jpeg', 149308, '400,300'),
(15, 2, 3, '{\"boite\":\"Transmission \\u00e0 variation continue\",\"moteur\":\"Essence\",\"carburant\":\"SP95-E10\"}', 0, 22, 1, '2020-11-13 19:16:29', 'c2-5faecd7da52f6319070211.jpg', 'c2.jpg', 'image/jpeg', 127947, '640,480'),
(16, 2, 3, '{\"boite\":\"Manuelle\",\"moteur\":\"GPL\",\"carburant\":\"GPLc\"}', 0, 34, 0, '2020-11-13 19:17:03', 'c3-5faecd9f24eef813181313.jpg', 'c3.jpg', 'image/jpeg', 9356, '268,188'),
(17, 2, 3, '{\"boite\":\"Automatique \\u00e0 simple embrayage\",\"moteur\":\"Essence\",\"carburant\":\"SP95-E10\"}', 0, 59, 1, '2020-11-13 19:17:25', 'c4-5faecdb5d5583806855160.jpg', 'c4.jpg', 'image/jpeg', 30342, '690,405'),
(18, 2, 4, '{\"boite\":\"Automatique \\u00e0 convertisseur de couple\",\"moteur\":\"Hybride\",\"carburant\":\"SP95\"}', 0, 345, 1, '2020-11-13 19:18:56', 'f3-5faece10c993c648333499.jpg', 'f3.jpg', 'image/jpeg', 6050, '275,183'),
(19, 2, 4, '{\"boite\":\"Transmission \\u00e0 variation continue\",\"moteur\":\"Essence\",\"carburant\":\"SP95-E10\"}', 0, 287, 1, '2020-11-13 19:19:23', 'f1-5faece2bd8338458724725.jpg', 'f1.JPG', 'image/jpeg', 34805, '640,400'),
(20, 2, 4, '{\"boite\":\"Automatique \\u00e0 double embrayage\",\"moteur\":\"Essence\",\"carburant\":\"SP95-E10\"}', 0, 190, 1, '2020-11-13 19:19:55', 'f2-5faece4b219d9353231666.jpg', 'f2.jpg', 'image/jpeg', 6589, '259,194'),
(21, 2, 5, '{\"boite\":\"Automatique \\u00e0 simple embrayage\",\"moteur\":\"GPL\",\"carburant\":\"GPLc\"}', 0, 550, 1, '2020-11-13 19:21:42', 'cam-04-5faeceb6eca0c951126734.jpg', 'cam-04.jpg', 'image/jpeg', 525615, '1920,1190'),
(22, 2, 5, '{\"boite\":\"Automatique \\u00e0 convertisseur de couple\",\"moteur\":\"Hybride\",\"carburant\":\"SP95-E10\"}', 0, 489, 1, '2020-11-13 19:22:04', 'cam-03-5faececc17b9e584324734.jpg', 'cam-03.jpg', 'image/jpeg', 270556, '1200,900'),
(23, 2, 6, '{\"boite\":\"Automatique \\u00e0 simple embrayage\",\"moteur\":\"GPL\",\"carburant\":\"SP98\"}', 0, 1205, 1, '2020-11-13 19:23:26', 'images-5faecf1e1cde6671482506.jpg', 'images.jpg', 'image/jpeg', 11336, '287,176'),
(24, 2, 6, '{\"boite\":\"Automatique \\u00e0 double embrayage\",\"moteur\":\"GPL\",\"carburant\":\"SP95-E10\"}', 0, 950, 0, '2020-11-13 19:23:48', 'mans-5faecf3447162475066049.jpg', 'mans.jpg', 'image/jpeg', 316805, '1700,921'),
(25, 2, 7, '{\"boite\":\"Manuelle\",\"moteur\":\"GPL\",\"carburant\":\"Gazole\"}', 0, 75, 1, '2020-11-13 19:25:08', 'image-mq6-12.20200616112127-5faecf84b26a9780027693.jpeg', 'image.MQ6.12.20200616112127.jpeg', 'image/jpeg', 140105, '1680,945'),
(26, 2, 7, '{\"boite\":\"S\\u00e9quentielle\",\"moteur\":\"Essence\",\"carburant\":\"GPLc\"}', 0, 60, 1, '2020-11-13 19:25:38', 'index-5faecfa267dd5538995345.jpg', 'index.jpg', 'image/jpeg', 9433, '300,168'),
(27, 2, 7, '{\"boite\":\"S\\u00e9quentielle\",\"moteur\":\"GPL\",\"carburant\":\"GPLc\"}', 0, 90, 1, '2020-11-13 19:25:57', 'mercedes-benz-glc-5faecfb51117c194118084.jpg', 'mercedes-benz-glc.jpg', 'image/jpeg', 235563, '1920,1080'),
(28, 2, 8, '{\"boite\":\"Automatique \\u00e0 double embrayage\",\"moteur\":\"Essence\",\"carburant\":\"SP95-E10\"}', 0, 189, 0, '2020-11-13 19:27:11', 'images-5faecfff576aa326728179.jpg', 'images.jpg', 'image/jpeg', 7708, '272,185'),
(29, 2, 9, '{\"boite\":\"Transmission \\u00e0 variation continue\",\"moteur\":\"Electrique\",\"carburant\":\"Electrique\"}', 0, 66, 1, '2020-11-13 19:28:19', '11741510-5faed04340026706883411.webp', '11741510.webp', 'image/webp', 190252, '1240,826'),
(30, 2, 9, '{\"boite\":\"Automatique \\u00e0 double embrayage\",\"moteur\":\"Essence\",\"carburant\":\"SP95-E10\"}', 0, 80, 1, '2020-11-13 19:28:48', 'image-5faed06089fca943471720.jpg', 'image.jpg', 'image/jpeg', 102839, '885,500'),
(31, 2, 9, '{\"boite\":\"Manuelle\",\"moteur\":\"GPL\",\"carburant\":\"Gazole\"}', 0, 42, 1, '2020-11-13 19:29:18', 'index-5faed07e84ecc726756500.jpg', 'index.jpg', 'image/jpeg', 9859, '302,167'),
(32, 2, 11, '{\"boite\":\"Automatique \\u00e0 double embrayage\",\"moteur\":\"GPL\",\"carburant\":\"Gazole\"}', 0, 70, 1, '2020-11-13 19:30:25', '1557730401097-5faed0c133ed8106050934.jpg', '1557730401097.jpg', 'image/jpeg', 18658, '375,211'),
(33, 2, 11, '{\"boite\":\"Manuelle\",\"moteur\":\"GPL\",\"carburant\":\"Gazole\"}', 0, 49, 0, '2020-11-13 19:30:45', 'index-5faed0d532b55390873013.jpg', 'index.jpg', 'image/jpeg', 9392, '300,168'),
(34, 2, 11, '{\"boite\":\"Automatique \\u00e0 simple embrayage\",\"moteur\":\"GPL\",\"carburant\":\"SP95-E10\"}', 0, 32, 1, '2020-11-13 19:31:03', 's8-maxi-fiche-fiabilite-que-vaut-la-renault-clio-4-en-occasion-104931-5faed0e747d48460603357.jpg', 'S8-Maxi-fiche-fiabilite-que-vaut-la-Renault-Clio-4-en-occasion-104931.jpg', 'image/jpeg', 111473, '960,563'),
(35, 2, 13, '{\"boite\":\"Automatique \\u00e0 simple embrayage\",\"moteur\":\"Electrique\",\"carburant\":\"Electrique\"}', 0, 63, 1, '2020-11-13 19:32:23', 'index-5faed13791a53510387399.jpg', 'index.jpg', 'image/jpeg', 11948, '259,194'),
(36, 2, 13, '{\"boite\":\"Manuelle\",\"moteur\":\"Diesel\",\"carburant\":\"SP98\"}', 0, 24, 1, '2020-11-13 19:32:46', 'images-5faed14e993d3724051715.jpg', 'images.jpg', 'image/jpeg', 9205, '259,194'),
(37, 2, 14, '{\"boite\":\"Automatique \\u00e0 simple embrayage\",\"moteur\":\"Hybride\",\"carburant\":\"GPLc\"}', 0, 79, 1, '2020-11-13 19:54:03', '1200-l-essai-nouvelle-volkswagen-passat-5faed64bd2e2d557423256.jpg', '1200-L-essai-nouvelle-volkswagen-passat.jpg', 'image/jpeg', 109986, '1200,640'),
(38, 2, 14, '{\"boite\":\"Automatique \\u00e0 double embrayage\",\"moteur\":\"Essence\",\"carburant\":\"GPLc\"}', 0, 64, 1, '2020-11-13 19:54:27', 'cover-r4x3w1000-5795f56be8cd9-171014-challenges-volkswagen-passat-5faed6637b5f3058843605.jpg', 'cover-r4x3w1000-5795f56be8cd9-171014-challenges-volkswagen-passat.jpg', 'image/jpeg', 67425, '1000,495'),
(39, 2, 14, '{\"boite\":\"Automatique \\u00e0 simple embrayage\",\"moteur\":\"Essence\",\"carburant\":\"Gazole\"}', 0, 89, 1, '2020-11-13 19:54:50', 'volkswagen-passat-2019-essai-1-5faed67a01a82069886606.png', 'volkswagen-passat-2019-essai_1.png', 'image/png', 478897, '690,405'),
(40, 2, 10, '{\"boite\":\"Automatique \\u00e0 simple embrayage\",\"moteur\":\"Hybride\",\"carburant\":\"SP95-E10\"}', 0, 330, 1, '2020-11-13 19:56:01', '198454-5faed6c15422f255636448.jpg', '-198454.jpg', 'image/jpeg', 159393, '1248,702'),
(41, 2, 10, '{\"boite\":\"Automatique \\u00e0 double embrayage\",\"moteur\":\"Essence\",\"carburant\":\"SP95-E10\"}', 0, 178, 1, '2020-11-13 19:56:23', 'index-5faed6d7d7fbf611516332.jpg', 'index.jpg', 'image/jpeg', 10368, '284,177');

-- --------------------------------------------------------

--
-- Table structure for table `car_type`
--

CREATE TABLE `car_type` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updated_at` datetime NOT NULL,
  `image_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_original_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_mime_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_size` int(11) DEFAULT NULL,
  `image_dimensions` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '(DC2Type:simple_array)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `car_type`
--

INSERT INTO `car_type` (`id`, `name`, `updated_at`, `image_name`, `image_original_name`, `image_mime_type`, `image_size`, `image_dimensions`) VALUES
(1, 'Audi A8', '2020-11-13 18:50:40', 'audia8-5faec7704b230748054311.png', 'AudiA8.png', 'image/png', 1456537, '2048,1360'),
(2, 'BMW Gt6', '2020-11-13 18:51:12', 'bmwgt6-5faec7901d008708668304.png', 'bmwGt6.png', 'image/png', 168949, '806,500'),
(3, 'Citroen DS3', '2020-11-13 18:51:34', 'citroends3-5faec7a67f91b741250567.png', 'CitroenDS3.png', 'image/png', 170950, '599,379'),
(4, 'Ferrari 458 Italia', '2020-11-13 18:52:32', 'ferrari-5faec7e039904957189824.png', 'ferrari.png', 'image/png', 280301, '1000,667'),
(5, 'Ferrari 812', '2020-11-13 18:52:50', 'ferrari812-5faec7f226251947897536.png', 'Ferrari812.png', 'image/png', 281020, '1440,616'),
(6, 'Lamborghini Aventador', '2020-11-13 18:53:17', 'lamborghiniaventador-5faec80dec208531381368.png', 'LamborghiniAventador.png', 'image/png', 243950, '1000,667'),
(7, 'Mercedes Benz GLC', '2020-11-13 18:53:37', 'mercedesbenzglc-5faec82118074064455529.png', 'MercedesBenzGLC.png', 'image/png', 1849315, '1800,1089'),
(8, 'Nissan GTR 2017', '2020-11-13 18:53:58', 'nissangtr2017-5faec8366750f753987972.png', 'NissanGTR2017.png', 'image/png', 114863, '1000,534'),
(9, 'Peugeot 208', '2020-11-13 18:54:15', 'peugeot208-5faec8478a28c682261176.png', 'Peugeot208.png', 'image/png', 779199, '1920,1080'),
(10, 'Porsche Cayenne', '2020-11-13 18:54:53', 'porsche-5faec86d5b42c938181650.png', 'porsche.png', 'image/png', 30291, '288,162'),
(11, 'Renault Clio', '2020-11-13 18:55:09', 'renaultclio-5faec87dd2354813833814.png', 'RenaultClio.png', 'image/png', 305533, '800,510'),
(12, 'Renault Twingo', '2020-11-13 18:55:37', 'renaulttwingo-5faec8998bb4f192536849.jpg', 'renaultTwingo.jpg', 'image/jpeg', 71789, '940,531'),
(13, 'Toyota Yaris', '2020-11-13 18:55:49', 'toyotayaris-5faec8a5e4b9e296932407.png', 'ToyotaYaris.png', 'image/png', 2035827, '2048,1360'),
(14, 'Volkswagen Passat', '2020-11-13 18:56:19', 'volkswagenpassat-5faec8c3e2958269334522.png', 'VolkswagenPassat.png', 'image/png', 380411, '1500,970');

-- --------------------------------------------------------

--
-- Table structure for table `rent`
--

CREATE TABLE `rent` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `car_id` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date DEFAULT NULL,
  `is_monthly_recurring` tinyint(1) NOT NULL,
  `price` double NOT NULL,
  `is_paid` tinyint(1) NOT NULL,
  `paid_months` int(11) DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  `finished` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `rent`
--

INSERT INTO `rent` (`id`, `user_id`, `car_id`, `start_date`, `end_date`, `is_monthly_recurring`, `price`, `is_paid`, `paid_months`, `duration`, `finished`) VALUES
(1, 3, 8, '2020-11-16', '2020-11-19', 0, 152, 1, 0, 4, 0),
(2, 3, 27, '2020-11-13', '2020-11-20', 0, 720, 1, 0, 8, 0),
(3, 3, 19, '2020-11-26', '2020-11-27', 0, 574, 0, 0, 2, 0),
(4, 3, 36, '2020-11-14', NULL, 1, 648, 0, 1, NULL, 0),
(5, 4, 17, '2020-11-13', NULL, 1, 1593, 0, 1, NULL, 0),
(6, 4, 38, '2020-11-13', '2020-11-25', 0, 832, 1, 0, 13, 0),
(7, 4, 4, '2020-11-18', '2020-12-08', 0, 1890, 1, 0, 21, 0),
(8, 5, 21, '2020-11-13', NULL, 1, 14850, 0, 1, NULL, 0),
(9, 5, 11, '2020-10-13', '2020-10-15', 0, 267, 1, 0, 3, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` longtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:json)',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `roles`, `password`, `email`) VALUES
(1, 'admin', '[\"ROLE_ADMIN\"]', '$argon2id$v=19$m=65536,t=4,p=1$aWNNVVFhdkRzSC9oS3c0Wg$C9pBQsJRlQXrwNu8x5/7jo91YdbyHLxSKkkhLbe8DA4', 'admin@carapp.com'),
(2, 'loueur', '[\"ROLE_LOUEUR\"]', '$argon2id$v=19$m=65536,t=4,p=1$OUlaSGlFYUE4QUZEWWVTaA$5O7joZmEz5FxkUXMD46IvCT7SW6RBhpWBJxBLvEAfp0', 'loueur@carapp.com'),
(3, 'Daisi Carignan', '[\"ROLE_USER\"]', '$argon2id$v=19$m=65536,t=4,p=1$ZkgvS1BTZ1cvWi9YNXpuTw$ZmiWGqlBToTQXSbt8+1EKJvOA59dkQ7MThjylJgGWh4', 'daisi.carignan@gmail.com'),
(4, 'Ernest Bonenfant', '[\"ROLE_USER\"]', '$argon2id$v=19$m=65536,t=4,p=1$Nm0yNzAweS92dDJvTTlrNg$2csv1JSLxNZb8TRErF16xgnMLuInJxK26kM6gRLNH4M', 'ernest.bonenfant@gmail.com'),
(5, 'Alita Robert', '[\"ROLE_USER\"]', '$argon2id$v=19$m=65536,t=4,p=1$ejROcEVrU2h4Y2NaNU5kaQ$R+GiyS+0Fj+COvoIsVK1Tnku4SNB8zvwxZCQb4BpEtg', 'alita.robert@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `car`
--
ALTER TABLE `car`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_773DE69DE289A545` (`renter_id`),
  ADD KEY `IDX_773DE69DC54C8C93` (`type_id`);

--
-- Indexes for table `car_type`
--
ALTER TABLE `car_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rent`
--
ALTER TABLE `rent`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_2784DCCA76ED395` (`user_id`),
  ADD KEY `IDX_2784DCCC3C6F69F` (`car_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_8D93D6495E237E06` (`name`),
  ADD UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `car`
--
ALTER TABLE `car`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `car_type`
--
ALTER TABLE `car_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `rent`
--
ALTER TABLE `rent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `car`
--
ALTER TABLE `car`
  ADD CONSTRAINT `FK_773DE69DC54C8C93` FOREIGN KEY (`type_id`) REFERENCES `car_type` (`id`),
  ADD CONSTRAINT `FK_773DE69DE289A545` FOREIGN KEY (`renter_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `rent`
--
ALTER TABLE `rent`
  ADD CONSTRAINT `FK_2784DCCA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FK_2784DCCC3C6F69F` FOREIGN KEY (`car_id`) REFERENCES `car` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
