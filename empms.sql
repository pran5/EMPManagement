-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 03, 2021 at 05:30 PM
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
  `client_mobile_no` varchar(12) DEFAULT NULL,
  `Client_Name` varchar(30) DEFAULT NULL,
  `Client_PAN` varchar(12) DEFAULT NULL,
  PRIMARY KEY (`Client_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`Client_Id`, `Client_Email`, `client_mobile_no`, `Client_Name`, `Client_PAN`) VALUES
('C001', 'hd@hotmail.com', '8989787890', 'HDFC', '12HD63789'),
('C002', 'hi@hotmail.com', '7897897890', 'Hyundai', '54HI87654'),
('C003', 'ta@hotmail.com', '8978987809', 'Toyota', '76TA86678');

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
  `emp_mobile_no` varchar(12) DEFAULT NULL,
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

INSERT INTO `employee` (`Emp_Id`, `Emp_Firstname`, `Emp_Lastname`, `Emp_Email`, `Emp_Address`, `emp_mobile_no`, `Emp_City`, `Emp_State`, `Emp_Dept_Id`, `Emp_Designation`, `Emp_Gender`, `Emp_Payroll`, `Emp_Dob`, `Emp_Qualification`, `Emp_Skills`, `Emp_Access`, `Emp_Pass`, `Emp_Photo`) VALUES
('E001', 'PRANAV ', 'Zade', 'ast', '404, saket', '89562314', 'Delhi', 'Delhi', 'DP_01', 'CIO', 'M', 'A', '1980-09-09', 'B.com, MBA', 'Business Acumen & Interest', 'A', '123', NULL),
('E002', 'Virat', 'Kohli', 'vk@hotmail.com', '123,Saket,Delhi', '8989898989', 'Delhi', 'Delhi', 'DP_04', 'Manager', 'M', 'B', '1984-02-07', 'M.tech(CS),M.B.A', 'Python,Javascript,React', 'M', '123', NULL),
('E003', 'Rohit', 'Sharma', 'rs@hotmail.com', '123,Karol Bagh', '9090909090', 'Delhi', 'Delhi', 'DP_04', 'Manager', 'M', 'B', '1985-06-12', 'Btech(CS)', 'Java,Dotnet', 'M', '123', NULL),
('E004', 'Ajinkya', 'Rahane', 'ar@hotmail.com', '123,Huda City Centre', '7878787878', 'Delhi', 'Delhi', 'DP_04', 'Manager', 'M', 'B', '1989-02-05', 'PGDAC , Btech', 'C++,NodeJS', 'M', '123', NULL),
('E005', 'Suresh', 'Raina', 'sr@hotmail.com', '56,Sarojini', '9879879879', 'Delhi', 'Delhi', 'DP_02', 'Manager', 'M', 'B', '1986-07-18', 'Betech', 'Angular,React', 'M', '123', NULL),
('E006', 'Mahendra Singh', 'Dhoni', 'msd@hotmail.com', '34,Raj Bagh,Delhi', '7878787878', 'Delhi', 'Delhi', 'DP_03', 'Manager', 'M', 'B', '1980-09-17', 'M.tech,M.B.A', 'Selenium,Java', 'M', '123', NULL),
('E007', 'Rahul', 'KL', 'rkl@hotmail.com', '54,Mansarovar Park,Delhi', '8978978987', 'Delhi', 'Delhi', 'DP_02', 'Devloper', 'M', 'C', '1986-02-12', 'M.tech', 'Java,NodeJS', 'E', '123', NULL),
('E008', 'Shikhar', 'Dhavan', 'sd@hotmail.com', '87,Dilshad Garden', '90898976789', 'Delhi', 'Delhi', 'DP_02', 'Devloper', 'M', 'C', '1986-02-11', 'B.tech', 'Javascript,React', 'E', '123', NULL),
('E009', 'Rishabh', 'Pant', 'rp@Hotmail.com', '34,Shastri Park,Delhi', '4564564566', 'Delhi', 'Delhi', 'DP_02', 'Devloper', 'M', 'C', '1990-06-11', 'B.Tech', 'Angualr,JS', 'E', '123', NULL),
('E010', 'Ishaant', 'Sharma', 'is@hotmail.com', '67,Shastri Nagar,Delhi', '6787898909', 'Delhi', 'Delhi', 'DP_02', 'Designer', 'M', 'C', '1990-06-23', 'PGDAC', 'Angular,React', 'E', '123', NULL),
('E011', 'Jaspreet', 'Bumrah', 'jb@hotmail.com', '34,Mansarovar,Delhi', '1234564564', 'Delhi', 'Delhi', 'DP_02', 'Designer', 'M', 'C', '1990-08-16', 'B.tech', 'Adobe Lightroom,After Effects', 'E', '123', NULL),
('E012', 'Shardul', 'Thakur', 'st@hotmail.com', '34,Huda,Delhi', '234345678', 'Delhi', 'Delhi', 'DP_04', 'HR', 'M', 'C', '1990-08-14', 'M.B.A', 'Team Management', 'A', '123', NULL),
('E013', 'Mithali', 'Raj', 'mr@hotmail.com', '34,Sarojini,Delhi', '9090897898', 'Delhi', 'Delhi', 'DP_01', 'Consultant', 'F', 'C', '1990-09-21', 'BBA', 'Account Handling', 'A', '123', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `leaverequests`
--

CREATE TABLE IF NOT EXISTS `leaverequests` (
  `LRequest_Id` int(10) NOT NULL AUTO_INCREMENT,
  `LRequest_Emp_Id` varchar(10) DEFAULT NULL,
  `LRequest_Description` varchar(200) DEFAULT NULL,
  `LRequest_From` date DEFAULT NULL,
  `LRequest_To` date DEFAULT NULL,
  `LRequest_M_Status` int(20) DEFAULT NULL,
  `LRequest_A_Status` int(20) DEFAULT NULL,
  PRIMARY KEY (`LRequest_Id`),
  KEY `LRequest_Emp_Id` (`LRequest_Emp_Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `leaverequests`
--

INSERT INTO `leaverequests` (`LRequest_Id`, `LRequest_Emp_Id`, `LRequest_Description`, `LRequest_From`, `LRequest_To`, `LRequest_M_Status`, `LRequest_A_Status`) VALUES
(12, 'E003', 'Urgent Work', '2021-02-03', '2021-02-05', 1, 0),
(13, 'E007', 'Medical Checkup', '2021-02-15', '2021-02-17', 2, 2),
(14, 'E008', 'Personal Work', '2021-02-03', '2021-02-09', 2, 2),
(15, 'E002', 'Personal', '2021-02-08', '2021-02-11', 1, 1),
(16, 'E002', 'Personal', '2021-02-11', '2021-02-18', 1, 2);

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
('M002', 'E002', 'P001'),
('M003', 'E003', 'P002'),
('M004', 'E004', 'P003'),
('M005', 'E005', NULL),
('M006', 'E006', NULL);

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

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`Project_Id`, `Project_Name`, `Project_Client_Id`, `Project_M_Id`, `Project_Description`, `Project_Technology`, `Project_Duration`, `Project_Start_Date`) VALUES
('P001', 'UXBank', 'C001', 'M002', 'Handling Bank Activities', 'Angular,Java', 500, '2021-02-19'),
('P002', 'HMIL Website', 'C002', 'M003', 'Website,Maintenance', 'React,Java', 1000, '2021-02-25'),
('P003', 'ToyotaINDLTD', 'C003', 'M004', 'Website Building and Maintenance', 'Angular,NodeJs', 1000, '2021-02-09');

-- --------------------------------------------------------

--
-- Table structure for table `pushnotification`
--

CREATE TABLE IF NOT EXISTS `pushnotification` (
  `PN_No` int(10) NOT NULL AUTO_INCREMENT,
  `PN_Subject` varchar(100) DEFAULT NULL,
  `PN_Message` varchar(500) DEFAULT NULL,
  `PN_Date_Time` datetime DEFAULT NULL,
  `PN_Level` enum('A','M','T') DEFAULT NULL,
  `PN_Emp_Id` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`PN_No`),
  KEY `PN_Emp_Id` (`PN_Emp_Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

-- --------------------------------------------------------

--
-- Table structure for table `resourcerequests`
--

CREATE TABLE IF NOT EXISTS `resourcerequests` (
  `RR_Id` int(10) NOT NULL AUTO_INCREMENT,
  `RR_Emp_Id` varchar(10) DEFAULT NULL,
  `RR_Name` varchar(50) DEFAULT NULL,
  `RR_Description` varchar(200) DEFAULT NULL,
  `RR_Status` int(20) DEFAULT NULL,
  `RR_Date` date DEFAULT NULL,
  PRIMARY KEY (`RR_Id`),
  KEY `RR_Emp_Id` (`RR_Emp_Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `resourcerequests`
--

INSERT INTO `resourcerequests` (`RR_Id`, `RR_Emp_Id`, `RR_Name`, `RR_Description`, `RR_Status`, `RR_Date`) VALUES
(8, 'E002', 'Mouse', 'Damaged', 0, '2021-02-03'),
(9, 'E002', 'Router', 'For Office', 1, '2021-02-03'),
(10, 'E003', 'Laptop', 'HDD Damaged', 2, '2021-02-03'),
(11, 'E007', 'Python Sessions', 'Sessions required for upcoming project', 2, '2021-02-03');

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE IF NOT EXISTS `team` (
  `Team_M_Id` varchar(10) NOT NULL,
  `T_Emp_Id` varchar(10) DEFAULT NULL,
  `Team_Id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`Team_Id`),
  KEY `Emp_Id` (`T_Emp_Id`),
  KEY `Team_M_Id` (`Team_M_Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`Team_M_Id`, `T_Emp_Id`, `Team_Id`) VALUES
('M002', 'E007', 9),
('M003', 'E008', 10),
('M004', 'E009', 11),
('M002', 'E009', 12),
('M002', 'E010', 13),
('M003', 'E011', 14),
('M003', 'E007', 15);

-- --------------------------------------------------------

--
-- Table structure for table `ticket`
--

CREATE TABLE IF NOT EXISTS `ticket` (
  `Ticket_No` int(10) NOT NULL AUTO_INCREMENT,
  `KProject_Id` varchar(10) DEFAULT NULL,
  `KEmp_Id` varchar(10) DEFAULT NULL,
  `Ticket_Update` datetime DEFAULT NULL,
  `Ticket_Type` varchar(10) DEFAULT NULL,
  `Ticket_Details` varchar(200) DEFAULT NULL,
  `Ticket_Status` varchar(10) DEFAULT NULL,
  `Ticket_Priority` enum('H','L','M') DEFAULT NULL,
  PRIMARY KEY (`Ticket_No`),
  KEY `Project_Id` (`KProject_Id`),
  KEY `Emp_Id` (`KEmp_Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

--
-- Dumping data for table `ticket`
--

INSERT INTO `ticket` (`Ticket_No`, `KProject_Id`, `KEmp_Id`, `Ticket_Update`, `Ticket_Type`, `Ticket_Details`, `Ticket_Status`, `Ticket_Priority`) VALUES
(8, 'P001', 'E007', '2021-02-03 21:17:32', 'Frontend', 'SIde Component Missing', 'OPEN', 'M'),
(9, 'P001', 'E007', '2021-02-03 21:17:58', 'Frontend', 'Login Page Pending', 'OPEN', 'H'),
(10, 'P001', 'E007', '2021-02-03 21:18:22', 'Frontend', 'Dropdown not Working', 'CLOSE', 'L'),
(11, 'P001', 'E009', '2021-02-03 21:19:39', 'Backend', 'Login Session not handled', 'OPEN', 'H'),
(12, 'P001', 'E009', '2021-02-03 21:19:56', 'Backend', 'Database connection Error', 'CLOSE', 'M'),
(13, 'P001', 'E009', '2021-02-03 21:20:24', 'Backend', 'Add Member Api not working', 'OPEN', 'M'),
(14, 'P001', 'E010', '2021-02-03 21:21:20', 'Design', 'Frontpage banner design', 'OPEN', 'M'),
(15, 'P002', 'E008', '2021-02-03 21:25:48', 'Frontend', 'Cart Development', 'OPEN', 'M'),
(16, 'P002', 'E007', '2021-02-03 21:27:15', 'Backend', 'Transaction Handling', 'OPEN', 'M'),
(17, 'P002', 'E011', '2021-02-03 21:27:49', 'Frontend', 'UI Design', 'CLOSE', 'L');

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
  ADD CONSTRAINT `team_ibfk_1` FOREIGN KEY (`T_Emp_Id`) REFERENCES `employee` (`Emp_Id`),
  ADD CONSTRAINT `team_ibfk_2` FOREIGN KEY (`Team_M_Id`) REFERENCES `manager` (`M_Id`);

--
-- Constraints for table `ticket`
--
ALTER TABLE `ticket`
  ADD CONSTRAINT `ticket_ibfk_1` FOREIGN KEY (`KProject_Id`) REFERENCES `project` (`Project_Id`),
  ADD CONSTRAINT `ticket_ibfk_2` FOREIGN KEY (`KEmp_Id`) REFERENCES `employee` (`Emp_Id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
