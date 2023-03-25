ALTER USER 'jsapp'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
USE my_db;
CREATE TABLE users_ ( 
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  interests VARCHAR(255)
);
INSERT INTO users_(name, email, interests) VALUES ('Taron','tarhov2001@gmail.com','cloud, security');

