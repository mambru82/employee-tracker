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

listRoleChoices = () => {
    let roleChoices = [];
    const sql = `SELECT employee_role.title, employee_role.id
    FROM employee_role`
    connection.query(sql, function(err,res, fields) {
        if (err) throw err;
        for (i=0; i<res.length; i++){
         roleChoices.push(res[i].id + " " +res[i].title);
        }
    })
    return roleChoices;
}

listEmployeeNames = () => {
    let employeeChoices = [];
    const sql = `SELECT employee.firstName, employee.lastName, employee.id
        FROM employee`
    connection.query(sql, function(err, res, fields) {
        if(err) throw err;
        for (i=0; i<res.length; i++){
            employeeChoices.push(res[i].id + " " + res[i].firstName + " " + res[i].lastName);
        }
    })
    return employeeChoices;
}

listDepartmentNames = () => {
    let deptChoices = [];
    const sql = `SELECT department.dept_name, department.id
        FROM department`
    connection.query(sql, function(err, res, fields) {
        if(err) throw err;
        for (i=0; i<res.length; i++) {
            deptChoices.push(res[i].id + " " + res[i].dept_name)
        }
    })
    return deptChoices;
}

createNewEmployee = () => {
    let roleChoices = listRoleChoices();
    let managerChoices = listEmployeeNames();
    console.log(managerChoices);
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
        type: 'list',
        name: 'role',
        message: "What is your employee's position?",
        choices: roleChoices
    },
    {
        type: 'list',
        name: 'manager',
        message: "Who is your employee's manager",
        choices: managerChoices
    }])
    .then(({first_name, last_name, role, manager}) => {
        let roleId = parseInt(role.split(" ")[0])
        let managerId = parseInt(manager.split(" ")[0])
        console.log(roleId);
        console.log('Creating a new employee...\n');
        const query = connection.query(
            'INSERT INTO employee SET ?',
            {
            firstName: first_name,
            lastName: last_name,
            role_id: roleId,
            manager_id: managerId
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
        type: 'list',
        name: 'department_id',
        message: "What is the department for the new position?",
        choices: listDepartmentNames()
    }])
    .then(({title, salary, department_id}) => {
        console.log('Creating a new position...\n');
        deptId = parseInt(department_id.split(" ")[0]);
        const query = connection.query(
            'INSERT INTO employee_role SET ?',
            {
            title: title,
            salary: parseInt(salary),
            department_id: deptId,
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
module.exports = {createNewEmployee, addDepartment, addEmployeeRole, listRoleChoices, listDepartmentNames, listEmployeeNames};