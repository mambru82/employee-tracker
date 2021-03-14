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

createNewEmployee = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'first_name',
        message: "What is your employee's first (or preferred) name?"
    },
    {
        type: 'input',
        name: 'last_name',
        message: "What is your employee's last name?"

    },
    {
        type: 'input',
        name: 'role',
        message: "What is your employee's position? (pick a number between 1 and 11)"
    },
    {
        type: 'input',
        name: 'manager',
        message: "Who is your employee's manager"
    }])
    .then(({first_name, last_name, role, manager}) => {
        console.log('Creating a new employee...\n');
        const query = connection.query(
            'INSERT INTO employee SET ?',
            {
            firstName: first_name,
            lastName: last_name,
            role_id: parseInt(role),
            manager_id: parseInt(manager)
            },
            function(err, res) {
            if (err) throw err;
            console.log(res.affectedRows + ' new Employee created!\n');
            // Call updateProduct() AFTER the INSERT completes
            }
        );
        // logs the actual query being run
        console.log(query.sql);
        homescreen();
    })
}
addDepartment = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'dept_name',
        message: "What is the name of the new department?"
    }])
    .then(({dept_name}) => {
        console.log('Creating a new department...\n');
        const query = connection.query(
            'INSERT INTO department SET ?',
            {
            dept_name: dept_name
            },
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
addEmployeeRole = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'title',
        message: "What is the name or title for the new position?"
    },
    {
        type: 'input',
        name: 'salary',
        message: "What is the annual salary in US dollars?"

    },
    {
        type: 'input',
        name: 'department_id',
        message: "What is the department id for the new position (pick a number between 1 and 4)"
    }])
    .then(({title, salary, department_id}) => {
        console.log('Creating a new position...\n');
        const query = connection.query(
            'INSERT INTO employee_role SET ?',
            {
            title: title,
            salary: parseInt(salary),
            department_id: parseInt(department_id),
            },
            function(err, res) {
            if (err) throw err;
            console.log(res.affectedRows + ' new Employee created!\n');
            // Call updateProduct() AFTER the INSERT completes
            }
        );
        // logs the actual query being run
        console.log(query.sql);
        homescreen();
    })
}
module.exports = {createNewEmployee, addDepartment, addEmployeeRole};