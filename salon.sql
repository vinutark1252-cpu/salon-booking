CREATE DATABASE salon_db;

USE salon_db;

CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    service VARCHAR(50),
    date DATE
);