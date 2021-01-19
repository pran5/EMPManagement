-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 09, 2021 at 01:56 PM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `empms`
--

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE IF NOT EXISTS `client` (
  `Client_Id` varchar(10) NOT NULL,
  `Client_Email` varchar(50) DEFAULT NULL,
  `Client_MobileNo` varchar(12) DEFAULT NULL,
  `Client_Name` varchar(30) DEFAULT NULL,
  `Client_PAN` varchar(12) DEFAULT NULL,
  PRIMARY KEY (`Client_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE IF NOT EXISTS `department` (
  `Dept_Id` varchar(10) NOT NULL,
  `Dept_Name` varchar(30) NOT NULL,
  `Dept_Total_Emp` int(100) DEFAULT NULL,
  PRIMARY KEY (`Dept_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`Dept_Id`, `Dept_Name`, `Dept_Total_Emp`) VALUES
('DP_01', 'Accounts', 5),
('DP_02', 'Development', 10),
('DP_03', 'Support', 5),
('DP_04', 'Administration', 4);

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE IF NOT EXISTS `employee` (
  `Emp_Id` varchar(10) NOT NULL,
  `Emp_Firstname` varchar(25) DEFAULT NULL,
  `Emp_Lastname` varchar(25) DEFAULT NULL,
  `Emp_Email` varchar(50) DEFAULT NULL,
  `Emp_Address` varchar(50) DEFAULT NULL,
  `Emp_MobileNo` varchar(12) DEFAULT NULL,
  `Emp_City` varchar(20) DEFAULT NULL,
  `Emp_State` varchar(20) DEFAULT NULL,
  `Emp_Dept_Id` varchar(10) DEFAULT NULL,
  `Emp_Designation` varchar(10) DEFAULT NULL,
  `Emp_Gender` enum('M','F','T') DEFAULT NULL,
  `Emp_Payroll` enum('A','B','C','D') DEFAULT NULL,
  `Emp_Dob` date DEFAULT NULL,
  `Emp_Qualification` varchar(25) DEFAULT NULL,
  `Emp_Skills` varchar(100) DEFAULT NULL,
  `Emp_Access` enum('A','M','E') DEFAULT NULL,
  `Emp_Pass` varchar(200) DEFAULT NULL,
  `Emp_Photo` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`Emp_Id`),
  KEY `Emp_Dept_Id` (`Emp_Dept_Id`),
  KEY `Emp_Payroll` (`Emp_Payroll`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`Emp_Id`, `Emp_Firstname`, `Emp_Lastname`, `Emp_Email`, `Emp_Address`, `Emp_MobileNo`, `Emp_City`, `Emp_State`, `Emp_Dept_Id`, `Emp_Designation`, `Emp_Gender`, `Emp_Payroll`, `Emp_Dob`, `Emp_Qualification`, `Emp_Skills`, `Emp_Access`, `Emp_Pass`, `Emp_Photo`) VALUES
('E001', 'Andrew ', 'Strauss', 'astrauss@hotmail.com', '404,saket', '89562314', 'Delhi', 'Delhi', 'DP_01', 'CIO', 'M', 'A', '1980-09-09', 'B.com, MBA', 'Business Acumen & Interest', 'A', '@123456', NULL),
('E002', 'James', 'Anderson', 'janderson@hotmail.com', '666,Huda City Centre', '74589623', 'Jaipur', 'Rajasthan', 'DP_02', 'Manager', 'M', 'B', '1988-12-04', 'M.Tech (CSE), MBA ', 'Full Stack, Java, Big Data Analysis, Team Management', 'M', '@654321', NULL),
('E003', 'Ian', 'Bell', 'ibell@gmail.com', '888,Hauz Khas', '98564712', 'Bhopal', 'Madhya Pradesh', 'DP_04', 'HR', 'M', 'C', '1993-01-28', 'BBA, MBA', 'Proactivity, HRIS Knowledge, Administrative Expert ', 'A', '@abcdef', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `leaverequests`
--

CREATE TABLE IF NOT EXISTS `leaverequests` (
  `LRequest_Id` varchar(10) NOT NULL,
  `LRequest_Emp_Id` varchar(10) DEFAULT NULL,
  `LRequest_Description` varchar(200) DEFAULT NULL,
  `LRequest_From` date DEFAULT NULL,
  `LRequest_To` date DEFAULT NULL,
  `LRequest_M_Status` tinyint(1) DEFAULT NULL,
  `LRequest_A_Status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`LRequest_Id`),
  KEY `LRequest_Emp_Id` (`LRequest_Emp_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `manager`
--

CREATE TABLE IF NOT EXISTS `manager` (
  `M_Id` varchar(10) NOT NULL,
  `M_Emp_Id` varchar(10) DEFAULT NULL,
  `M_Project_Id` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`M_Id`),
  KEY `M_Emp_Id` (`M_Emp_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `manager`
--

INSERT INTO `manager` (`M_Id`, `M_Emp_Id`, `M_Project_Id`) VALUES
('M001', 'E002', 'P001');

-- --------------------------------------------------------

--
-- Table structure for table `payrolls`
--

CREATE TABLE IF NOT EXISTS `payrolls` (
  `Payroll_Id` enum('A','B','C','D') NOT NULL,
  `Payroll_Amount` int(100) DEFAULT NULL,
  PRIMARY KEY (`Payroll_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payrolls`
--

INSERT INTO `payrolls` (`Payroll_Id`, `Payroll_Amount`) VALUES
('A', 100000),
('B', 75000),
('C', 50000),
('D', 35000);

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE IF NOT EXISTS `project` (
  `Project_Id` varchar(10) NOT NULL,
  `Project_Name` varchar(50) DEFAULT NULL,
  `Project_Client_Id` varchar(10) DEFAULT NULL,
  `Project_M_Id` varchar(10) DEFAULT NULL,
  `Project_Description` varchar(200) DEFAULT NULL,
  `Project_Technology` varchar(50) DEFAULT NULL,
  `Project_Duration` float DEFAULT NULL,
  `Project_Start_Date` date DEFAULT NULL,
  PRIMARY KEY (`Project_Id`),
  KEY `Project_M_Id` (`Project_M_Id`),
  KEY `Project_Client_Id` (`Project_Client_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `pushnotification`
--

CREATE TABLE IF NOT EXISTS `pushnotification` (
  `PN_No` varchar(10) NOT NULL,
  `PN_Subject` varchar(100) DEFAULT NULL,
  `PN_Message` varchar(500) DEFAULT NULL,
  `PN_Date_Time` datetime DEFAULT NULL,
  `PN_Level` enum('A','M','T') DEFAULT NULL,
  `PN_Emp_Id` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`PN_No`),
  KEY `PN_Emp_Id` (`PN_Emp_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `resourcerequests`
--

CREATE TABLE IF NOT EXISTS `resourcerequests` (
  `RR_Id` varchar(10) NOT NULL,
  `RR_Emp_Id` varchar(10) DEFAULT NULL,
  `RR_Name` varchar(50) DEFAULT NULL,
  `RR_Description` varchar(200) DEFAULT NULL,
  `RR_Status` tinyint(1) DEFAULT NULL,
  `RR_Date` date DEFAULT NULL,
  PRIMARY KEY (`RR_Id`),
  KEY `RR_Emp_Id` (`RR_Emp_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE IF NOT EXISTS `team` (
  `Team_M_Id` varchar(10) NOT NULL,
  `Emp_Id` varchar(10) DEFAULT NULL,
  KEY `Emp_Id` (`Emp_Id`),
  KEY `Team_M_Id` (`Team_M_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ticket`
--

CREATE TABLE IF NOT EXISTS `ticket` (
  `Ticket_No` varchar(10) NOT NULL,
  `Project_Id` varchar(10) DEFAULT NULL,
  `Emp_Id` varchar(10) DEFAULT NULL,
  `Ticket_Update` datetime DEFAULT NULL,
  `Ticket_Type` varchar(10) DEFAULT NULL,
  `Ticket_Details` varchar(200) DEFAULT NULL,
  `Ticket_Status` varchar(10) DEFAULT NULL,
  `Ticket_Priority` enum('H','L','M') DEFAULT NULL,
  PRIMARY KEY (`Ticket_No`),
  KEY `Project_Id` (`Project_Id`),
  KEY `Emp_Id` (`Emp_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`Emp_Dept_Id`) REFERENCES `department` (`Dept_Id`),
  ADD CONSTRAINT `employee_ibfk_2` FOREIGN KEY (`Emp_Payroll`) REFERENCES `payrolls` (`Payroll_Id`);

--
-- Constraints for table `leaverequests`
--
ALTER TABLE `leaverequests`
  ADD CONSTRAINT `leaverequests_ibfk_1` FOREIGN KEY (`LRequest_Emp_Id`) REFERENCES `employee` (`Emp_Id`);

--
-- Constraints for table `manager`
--
ALTER TABLE `manager`
  ADD CONSTRAINT `manager_ibfk_1` FOREIGN KEY (`M_Emp_Id`) REFERENCES `employee` (`Emp_Id`);

--
-- Constraints for table `project`
--
ALTER TABLE `project`
  ADD CONSTRAINT `project_ibfk_1` FOREIGN KEY (`Project_M_Id`) REFERENCES `manager` (`M_Id`),
  ADD CONSTRAINT `project_ibfk_2` FOREIGN KEY (`Project_Client_Id`) REFERENCES `client` (`Client_Id`);

--
-- Constraints for table `pushnotification`
--
ALTER TABLE `pushnotification`
  ADD CONSTRAINT `pushnotification_ibfk_1` FOREIGN KEY (`PN_Emp_Id`) REFERENCES `employee` (`Emp_Id`);

--
-- Constraints for table `resourcerequests`
--
ALTER TABLE `resourcerequests`
  ADD CONSTRAINT `resourcerequests_ibfk_1` FOREIGN KEY (`RR_Emp_Id`) REFERENCES `employee` (`Emp_Id`);

--
-- Constraints for table `team`
--
ALTER TABLE `team`
  ADD CONSTRAINT `team_ibfk_1` FOREIGN KEY (`Emp_Id`) REFERENCES `employee` (`Emp_Id`),
  ADD CONSTRAINT `team_ibfk_2` FOREIGN KEY (`Team_M_Id`) REFERENCES `manager` (`M_Id`);

--
-- Constraints for table `ticket`
--
ALTER TABLE `ticket`
  ADD CONSTRAINT `ticket_ibfk_1` FOREIGN KEY (`Project_Id`) REFERENCES `project` (`Project_Id`),
  ADD CONSTRAINT `ticket_ibfk_2` FOREIGN KEY (`Emp_Id`) REFERENCES `employee` (`Emp_Id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
