
DROP DATABASE IF EXISTS watchlist_db;

CREATE DATABASE watchlist_db;

USE watchlist_db;

CREATE TABLE movies (
  id int NOT NULL AUTO_INCREMENT,
  movie varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

