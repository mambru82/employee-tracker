const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // Your MySQL username
    user: 'root',
    // Your MySQL password
    password: 'password',
    database: 'department_DB'
  });
  
  connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId + '\n');
  });

//views all departments
readDepartment = () => {
   console.log('Showing department information') 
   const sql = `SELECT * FROM department;`
   connection.query(sql, function(err,result, fields) {
       if (err) throw err;
       console.table(result);
       homescreen();
   })
}

//views all roles
readRoles = () => {
    console.log('Showing role information')
    const sql = `SELECT employee_role.*, department.dept_name
    FROM employee_role
    LEFT JOIN department ON employee_role.department_id = department.id;`
    connection.query(sql, function(err,result, fields) {
        if (err) throw err;
        console.table(result);
        // console.log(result[0].TextRow.title);
        homescreen();
    })
}

//views all employees
readEmployees = () => {
    console.log('Showing all information for employees...\n');
    const sql = `SELECT E.id, E.firstName, E.lastName, employee_role.title, employee_role.salary, department.dept_name,
                  IFNULL(CONCAT(m.lastName, ', ', m.firstName), 'Department Head') AS 'Manager'
                  FROM employee E
                  LEFT JOIN employee_role ON E.role_id = employee_role.id
                  LEFT JOIN employee m ON m.id = E.manager_id
                  LEFT JOIN department ON employee_role.department_id = department.id;`;
    connection.query(sql, function(err, result, fields){
      if (err) throw err;
      console.table(result);
      homescreen();
    })
}

readEmployeesByDept = () => {
    console.log('Showing all employee information by DEPARTMENT...\n');
    const sql = `SELECT E.id, E.firstName, E.lastName, employee_role.title, employee_role.salary, department.dept_name,
                  IFNULL(CONCAT(m.lastName, ', ', m.firstName), 'Department Head') AS 'Manager'
                  FROM employee E
                  LEFT JOIN employee_role ON E.role_id = employee_role.id
                  LEFT JOIN employee m ON m.id = E.manager_id
                  LEFT JOIN department ON employee_role.department_id = department.id
                  ORDER BY dept_name;`;
    connection.query(sql, function(err, result, fields){
      if (err) throw err;
      console.table(result);
      homescreen();
    })
}

readEmployeesByManager = () => {
  console.log('Showing all employee information by DEPARTMENT...\n');
  const sql = `SELECT E.id, E.firstName, E.lastName, employee_role.title, employee_role.salary, department.dept_name,
                IFNULL(CONCAT(m.lastName, ', ', m.firstName), 'Department Head') AS 'Manager'
                FROM employee E
                LEFT JOIN employee_role ON E.role_id = employee_role.id
                LEFT JOIN employee m ON m.id = E.manager_id
                LEFT JOIN department ON employee_role.department_id = department.id
                ORDER BY Manager;`;
  connection.query(sql, function(err, result, fields){
    if (err) throw err;
    console.table(result);
    homescreen();
  })
}

exitHomescreen = () => {
    connection.end();
}


module.exports = {readEmployees, readEmployeesByDept, readEmployeesByManager, readDepartment, readRoles, exitHomescreen}