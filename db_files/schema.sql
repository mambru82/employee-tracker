DROP DATABASE IF EXISTS department_db;
CREATE DATABASE department_db;
USE department_db;

CREATE TABLE department(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  dept_name VARCHAR(100),
  PRIMARY KEY (id)
);

CREATE TABLE employee(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(30),
  lastName VARCHAR(30),
  role_id INTEGER(11) NOT NULL,
  manager_id INTEGER(11),
  PRIMARY KEY (id)
);

CREATE TABLE role(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  title VARCHAR(30),
  salary DECIMAL(15),
  department_id INTEGER(11)
)
