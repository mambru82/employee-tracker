const homescreen = require('./lib/homescreen.js')

homescreen();
// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   // Your MySQL username
//   user: 'root',
//   // Your MySQL password
//   password: 'password',
//   database: 'department_DB'
// });

// connection.connect(err => {
//   if (err) throw err;
//   console.log('connected as id ' + connection.threadId + '\n');
//   readEmployees();
// });

// createNewEmployee = () => {
//   console.log('Creating a new employee...\n');
//   const query = connection.query(
//     'INSERT INTO employee SET ?',
//     {
//       firstName: 'Eduardo',
//       lastName: 'Castro',
//       role_id: 5,
//       manager_id: 2
//     },
//     function(err, res) {
//       if (err) throw err;
//       console.log(res.affectedRows + ' product inserted!\n');
//       // Call updateProduct() AFTER the INSERT completes
//     }
//   );
//   // logs the actual query being run
//   console.log(query.sql);
// };


// deleteEmployee = () => {
//   console.log('Deleting employee...\n');
//   // Delete the flavor 'strawberry'
//   //
//   // YOUR CODE HERE
//   //
//   const deleteStrawberry = `DELETE FROM employee
//   WHERE id = 1`
//   const query = connection.query(deleteStrawberry, function(err, res) {
//     if (err) throw err;
//     console.log(res.affectedRows + ' employee deleted!\n');
//   })
//   console.log(query.sql);
// };

// readEmployees = () => {
//   console.log('Selecting all products...\n');
//   const sql = `SELECT E.id, E.firstName, E.lastName, employee_role.title, employee_role.salary, department.dept_name,
//                 IFNULL(CONCAT(m.lastName, ', ', m.firstName), 'Top Manager') AS 'Manager'
//                 FROM employee E
//                 LEFT JOIN employee_role ON E.role_id = employee_role.id
//                 LEFT JOIN employee m ON m.id = E.manager_id
//                 LEFT JOIN department ON employee_role.department_id = department.id;`;
//   connection.query(sql, function(err, result, fields){
//     if (err) throw err;
//     console.table(result);
//   })
//   // Write a simple query that will SELECT everything from the 'products' table
//   // Log the results in the console
//   //
//   // YOUR CODE HERE
//   //
//   connection.end();
// };
