DROP DATABASE IF EXISTS workouts_db;
CREATE DATABASE workouts_db;

USE workouts_db;

CREATE TABLE workouts (
    id INT NOT NULL AUTO_INCREMENT,
    workout VARCHAR(140) NOT NULL,
    queued BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

SELECT * FROM workouts;