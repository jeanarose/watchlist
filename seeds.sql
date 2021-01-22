DROP DATABASE IF EXISTS watchl_ist_db;

CREATE DATABASE watch_list_db;

USE watch_list_db;

CREATE TABLE movies (
  id int NOT NULL AUTO_INCREMENT,
  movie varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO movies (movie)
VALUES ("Frozen 2"), ("Jurassic Park");