### Schema

CREATE DATABASE eatdaburger_db;
USE eatdaburger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	consumed BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
