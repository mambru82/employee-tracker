INSERT INTO department (dept_name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Legal'),
    ('Finance');

INSERT INTO employee_role (title, salary, department_id)
VALUES  
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Sales Manager', 150000, 1),
    ('Software Engineer', 120000, 2),
    ('Lead Engineer', 150000, 2),
    ('Engineering VP', 250000, 2),
    ('Paralegal', 45000, 3),
    ('Lawyer', 190000, 3),
    ('Legal Team Lead', 350000, 3),
    ('Accountant', 125000, 4),
    ('Lead Accountant', 150000, 4);

INSERT INTO employee (firstName, lastName, role_id, manager_id)
VALUES
    ('John', 'Doe', 3, NULL),
    ('Mike', 'Chan', 6, NULL),
    ('Ashley', 'Rodriguez', 5, 2),
    ('Kevin', 'Tupik', 9, NULL),
    ('Tom', 'Allen', 11, NULL),
    ('Sarah', 'Lourd', 10, 5),
    ('Tammer', 'Galal', 8, 4),
    ('Malia', 'Brown', 4, 3),
    ('Johnny', 'Ramone', 1, 1),
    ('Friedrich', 'Ramone', 2, 9);
