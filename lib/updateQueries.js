const mysql = require('mysql2');
const inquirer = require('inquirer');

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

updateRole = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'employee_id',
        message: "What is the id of the employee to be updated?"   
    },
    {
        type: 'input',
        name: 'new_role',
        message: "What is the id of the new role for this employee?"
    }])
    .then(({employee_id, new_role}) => {
        console.log('Updating the role...\n');
        const query = connection.query(
            `UPDATE employee SET ? WHERE ?`,
            [
                {
                    role_id: parseInt(new_role)
                },
                {
                    id: parseInt(employee_id)
                }
            ],
            function(err, res) {
            if (err) throw err;
            console.log(res.affectedRows + ' new Department created!\n');
            // Call updateProduct() AFTER the INSERT completes
            }
        );
        // logs the actual query being run
        console.log(query.sql);
        homescreen();
    })
}
updateManager = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'employee_id',
        message: "What is the id of the employee to be updated?"   
    },
    {
        type: 'input',
        name: 'new_manager',
        message: "What is the id of the new manager for this employee?"
    }])
    .then(({employee_id, new_manager}) => {
        console.log('Updating the role...\n');
        const query = connection.query(
            `UPDATE employee SET ? WHERE ?`,
            [
                {
                    manager_id: parseInt(new_manager)
                },
                {
                    id: parseInt(employee_id)
                }
            ],
            function(err, res) {
            if (err) throw err;
            console.log(res.affectedRows + ' new Department created!\n');
            // Call updateProduct() AFTER the INSERT completes
            }
        );
        // logs the actual query being run
        console.log(query.sql);
        homescreen();
    })
}
module.exports = updateRole;