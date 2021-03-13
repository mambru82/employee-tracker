-- Shows all departments
SELECT * FROM department;
SELECT employee_role.*, department.dept_name
    FROM employee_role
    LEFT JOIN department ON employee_role.department_id = department.id;

-- Shows all employees
SELECT E.id, E.firstName, E.lastName, employee_role.title, employee_role.salary, department.dept_name,
    IFNULL(CONCAT(m.lastName, ', ', m.firstName), 'Top Manager') AS 'Manager'
    FROM employee E
    LEFT JOIN employee_role ON E.role_id = employee_role.id
    LEFT JOIN employee m ON m.id = E.manager_id
    LEFT JOIN department ON employee_role.department_id = department.id;

-- Shows all employees by Manager

SELECT E.id, E.firstName, E.lastName, employee_role.title, employee_role.salary, department.dept_name,
    IFNULL(CONCAT(m.lastName, ', ', m.firstName), 'Top Manager') AS 'Manager'
    FROM employee E
    LEFT JOIN employee_role ON E.role_id = employee_role.id
    LEFT JOIN employee m ON m.id = E.manager_id
    LEFT JOIN department ON employee_role.department_id = department.id
    ORDER BY Manager;

-- Shows all employees by Department
SELECT E.id, E.firstName, E.lastName, employee_role.title, employee_role.salary, department.dept_name,
    IFNULL(CONCAT(m.lastName, ', ', m.firstName), 'Top Manager') AS 'Manager'
    FROM employee E
    LEFT JOIN employee_role ON E.role_id = employee_role.id
    LEFT JOIN employee m ON m.id = E.manager_id
    LEFT JOIN department ON employee_role.department_id = department.id
    ORDER BY dept_name;

-- Adds an employee
-- INSERT INTO employee (firstName, lastName, role_id, manager_id)
--     VALUES ('Eduardo', 'Castro', '4', '2');
-- Removes an employee

-- DELETE FROM employee WHERE id = 1;

-- Updates Employee Role
-- UPDATE employee 
-- SET role_id = 1
-- WHERE id = 6;

-- Updates Employee Manager
-- UPDATE employee
-- SET manager_id = 3
-- WHERE id = 6;


-- SELECT
--     E.firstName, E.lastName,
--     IFNULL(CONCAT(m.lastName, ', ', m.firstName), 'Top Manager') AS 'Manager'
-- FROM employee E
-- LEFT JOIN employee m ON m.id = E.manager_id;