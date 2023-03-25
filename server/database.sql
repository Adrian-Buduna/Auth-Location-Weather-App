CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_name VARCHAR(255),
  email varchar(255) unique not null,
  password VARCHAR(255) not null,
  location VARCHAR(255)
);