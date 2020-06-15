CREATE DATABASE People;

USE People;

CREATE TABLE Persons(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    tel VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
);

ALTER TABLE Persons MODIFY COLUMN password VARCHAR(100) NOT NULL;

ALTER TABLE Persons ADD rol VARCHAR(10) NOT NULL;

CREATE TABLE Contacts(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    tel VARCHAR(50) NOT NULL,
    person_id INT
);