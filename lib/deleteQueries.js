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

//delete a department
deleteDepartment = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'confirm',
        message: 'press ENTER to confirm you want to DELETE an ENTIRE DEPARTMENT'
    },
    {
        type: 'list',
        name: 'old_dept',
        message: "What is the department you would like to remove?",
        choices: listDepartmentNames()
    }])
    .then(({old_dept}) => {
        console.log('deleting the role...\n');
        let deptId = parseInt(old_dept.split(" ")[0]);
        const query = connection.query(
            `DELETE FROM department WHERE ?`,
            [
               {
                    id: deptId
               }
            ],
            function(err, res) {
            if (err) throw err;
            console.log(res.affectedRows + ' department deleted!\n');
            // Call updateProduct() AFTER the INSERT completes
            }
        );
        // logs the actual query being run
        console.log(query.sql);
        homescreen();
    })
}
//delete a role
deleteRole = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'confirm',
        message: 'press ENTER to confirm you want to DELETE an employee role'
    },
    {
        type: 'list',
        name: 'old_role',
        message: "What is the role you would like to remove?",
        choices: listRoleChoices()
    }])
    .then(({old_role}) => {
        console.log('deleting the role...\n');
        let roleId = parseInt(old_role.split(" ")[0]);
        const query = connection.query(
            `DELETE FROM employee_role WHERE ?`,
            [
               {
                    id: roleId
               }
            ],
            function(err, res) {
            if (err) throw err;
            console.log(res.affectedRows + ' role deleted!\n');
            // Call updateProduct() AFTER the INSERT completes
            }
        );
        // logs the actual query being run
        console.log(query.sql);
        homescreen();
    })
}
//delete an employee
deleteEmployee = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'confirm',
        message: 'press ENTER to confirm you want to delete (fire) an employee'
    },
    {
        type: 'list',
        name: 'employee_id',
        message: "What is the name of the employee to be let go?",
        choices: listEmployeeNames()   
    }])
    .then(({employee_id}) => {
        console.log('Updating the role...\n');
        let employeeId = parseInt(employee_id.split(" ")[0]);
        const query = connection.query(
            `DELETE FROM employee WHERE ?`,
            [
                {
                    id: employeeId
                }
            ],
            function(err, res) {
            if (err) throw err;
            console.log(res.affectedRows + ' employee deleted!\n');
            // Call updateProduct() AFTER the INSERT completes
            }
        );
        // logs the actual query being run
        console.log(query.sql);
        homescreen();
    })
}

module.exports = {deleteDepartment, deleteRole, deleteEmployee}