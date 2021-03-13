DROP DATABASE IF EXISTS department_db;
CREATE DATABASE department_db;
USE department_db;

CREATE TABLE department (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  dept_name VARCHAR(100),
  PRIMARY KEY (id)
);

CREATE TABLE employee_role (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  title VARCHAR(30),
  salary DECIMAL(15),
  department_id INTEGER(11),
  PRIMARY KEY (id),
  CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(30),
  lastName VARCHAR(30),
  role_id INTEGER(11),
  manager_id INTEGER(11),
  PRIMARY KEY (id),
  CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES employee_role(id) ON DELETE CASCADE,
  CONSTRAINT mg_id FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);