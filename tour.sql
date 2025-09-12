-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 12, 2025 at 08:40 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tour`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(200) NOT NULL,
  `arrival_date` varchar(200) NOT NULL,
  `departure` varchar(200) NOT NULL,
  `number_of_days` int(200) NOT NULL,
  `price` varchar(200) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`id`, `name`, `email`, `phone`, `arrival_date`, `departure`, `number_of_days`, `price`, `status`) VALUES
(5, 'hariswaran', 'hari@gmail.com', '9500300481', '2024-05-24', '2024-05-25', 0, '30000', 'Approved'),
(6, 'nilla', 'nilla@gmail.com', '9087654321', '2025-09-10', '2025-09-13', 3, '75000', 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`username`, `email`, `password`, `status`) VALUES
('Akshaya', 'akshu@gmail.com', '123456', 0),
('haris', 'haric@gmail.com', '12345', 0),
('siva', 'siva@gmail.com', 'siva123', 0),
('nilla', 'nilla@gmail.com', 'nilla123', 0),
('rohini', 'rohini@gmail.com', 'rohini123', 0),
('kani', 'sanjith@gmail.com', '123456', 1),
('kani', 'sanjith@gmail.com', '123456', 1),
('s', 'sanjith@gmail.com', '123456', 1),
('geetha', 'sanjith@gmail.com', '123456', 1),
('hari', 'sanjith@gmail.com', '123456', 1),
('anu', 'anu@gmail.com', 'anu123', 1);

-- --------------------------------------------------------

--
-- Table structure for table `roomimage`
--

CREATE TABLE `roomimage` (
  `id` int(11) NOT NULL,
  `packname` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `file` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roomimage`
--

INSERT INTO `roomimage` (`id`, `packname`, `city`, `price`, `file`) VALUES
(4, 'Vacation package', 'Goa', '15000', '../upload/675d56f24addd-goa.jpg'),
(5, 'Family Package', 'kashmir', '12000', '../upload/675d5ed6c6948-kashmir.jpg'),
(6, 'Tour Package', 'shimla', '25000', '../upload/675d60351e6b1-shimla.jpg'),
(7, 'holiday tour', 'goa', '10000', '../upload/68bac19199045-lap_wall.jpg'),
(10, 'friends trip', 'pune', '20000', '../upload/68bac2a281229-lap_wall.jpg'),
(12, 'himalaiya', 'kerala', '20000', '../upload/68bff6476a77e-wall.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roomimage`
--
ALTER TABLE `roomimage`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `roomimage`
--
ALTER TABLE `roomimage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
