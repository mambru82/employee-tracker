const mysql = require('mysql2');
const inquirer = require('inquirer');
const {listDepartmentNames, listRoleChoices, listEmployeeNames} = require('./createQueries.js')

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
    return inquirer.prompt([
    {
        type: 'input',
        name: 'confirm',
        message: 'press ENTER to confirm you want to update an employee role'
    },
    {
        type: 'list',
        name: 'employee_id',
        message: "What is the name of the employee to be updated?",
        choices: listEmployeeNames()   
    },
    {
        type: 'list',
        name: 'new_role',
        message: "What is the new role for this employee?",
        choices: listRoleChoices()
    }])
    .then(({employee_id, new_role}) => {
        console.log('Updating the role...\n');
        let roleId = parseInt(new_role.split(" ")[0]);
        let employeeId = parseInt(employee_id.split(" ")[0]);
        const query = connection.query(
            `UPDATE employee SET ? WHERE ?`,
            [
                {
                    role_id: roleId
                },
                {
                    id: employeeId
                }
            ],
            function(err, res) {
            if (err) throw err;
            console.log(res.affectedRows + ' role updated!\n');
            // Call updateProduct() AFTER the INSERT completes
            }
        );
        // logs the actual query being run
        console.log(query.sql);
        homescreen();
    })
}
updateManager = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'confirm',
        message: 'press ENTER to confirm you want to update a manager'
    }, 
    {
        type: 'list',
        name: 'employee_id',
        message: "Who is the employee whose manager you would like to update?",
        choices: listEmployeeNames()
    },
    {
        type: 'list',
        name: 'new_manager',
        message: "Who is the employee's new manager?",
        choices: listEmployeeNames()
    }])
    .then(({employee_id, new_manager}) => {
        console.log('Updating the role...\n');
        let newManagerId = parseInt(new_manager.split(" ")[0]);
        let employeeId = parseInt(employee_id.split(" ")[0])
        const query = connection.query(
            `UPDATE employee SET ? WHERE ?`,
            [
                {
                    manager_id: newManagerId
                },
                {
                    id: employeeId
                }
            ],
            function(err, res) {
            if (err) throw err;
            console.log(res.affectedRows + ' new manager updated!\n');
            // Call updateProduct() AFTER the INSERT completes
            }
        );
        // logs the actual query being run
        console.log(query.sql);
        homescreen();
    })
}
module.exports = updateRole;