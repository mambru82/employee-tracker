const inquirer = require('inquirer');
const mysql = require('mysql2');
const { readEmployees, readEmployeesByDept, readEmployeesByManager, readDepartment, readRoles, exitHomescreen} = require('./readQueries.js')
const { createNewEmployee, addDepartment, addEmployeeRole } = require('./createQueries')
const { updateRole, updateManager } = require('./updateQueries.js')
const { deleteDepartment, deleteRole, deleteEmployee } = require('./deleteQueries.js')
// const connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     // Your MySQL username
//     user: 'root',
//     // Your MySQL password
//     password: 'password',
//     database: 'department_DB'
//   });
  
//   connection.connect(err => {
//     if (err) throw err;
//     console.log('connected as id ' + connection.threadId + '\n');
//   });

homescreen = function () {
    return inquirer.prompt([{
        type: 'list',
        name: 'homeScreen',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees', 
            'View All Employees by Department', 
            'View All Employees By Manager',
            'Add a department',
            'Add a role', 
            'Add employee',
            'Update employee role',
            'Update employee manager',
            'Delete department',
            'Delete role',
            'Delete employee',
             'EXIT']
    }])
    .then(({homeScreen}) => {
        if (homeScreen === 'View all departments') {
            return this.readDepartment();
        } else if (homeScreen === 'View all roles') {
            return this.readRoles();
        } else if(homeScreen === 'View all employees') {
            return this.readEmployees();
        } else if (homeScreen === 'View All Employees by Department') {
            return this.readEmployeesByDept();
        } else if (homeScreen === 'View All Employees By Manager') {
            return this.readEmployeesByManager();
        } else if (homeScreen === 'Add a department') {
            return this.addDepartment()
        } else if (homeScreen === 'Add a role') {
            return this.addEmployeeRole()
        } else if (homeScreen === 'Add employee') {
            return this.createNewEmployee()
        } else if (homeScreen === 'Update employee role') {
            return this.updateRole()
        } else if (homeScreen === 'Update employee manager') {
            return this.updateManager()
        } else if (homeScreen === 'Delete department') {
            return this.deleteDepartment()}
        else if (homeScreen === 'Delete role') {
            return this.deleteRole()}
        else if (homeScreen === 'Delete employee') {
            return this.deleteEmployee()}
        else if (homeScreen === 'EXIT') {return this.exitHomescreen()};
    })
}

module.exports = homescreen;

