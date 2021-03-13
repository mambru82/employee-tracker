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
  createProduct();
});

createProduct = () => {
  console.log('Inserting a new product...\n');
  const query = connection.query(
    'INSERT INTO products SET ?',
    {
      flavor: 'Rocky Road',
      price: 3.0,
      quantity: 50
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + ' product inserted!\n');
      // Call updateProduct() AFTER the INSERT completes
      updateProduct();
      deleteProduct();
      readProducts();
    }
  );
  // logs the actual query being run
  console.log(query.sql);
};

updateProduct = () => {
  console.log('Updating all Rocky Road quantities...\n');
  // Update the quantity for 'Rocky Road' to 100
  //
  const updateSql = `UPDATE products
  SET 
    quantity = 100
  WHERE flavor = "Rocky Road"`
  const query = connection.query(updateSql, function(err, res) {
    if (err) throw err;
    console.log(res.affectedRows + ' product updated!\n');
  })
    // YOUR CODE HERE
  //
  // Include the callback function to catch any errors,
  // log how many products were updated,
  // and call deleteProduct() AFTER the UPDATE completes
  //
  // YOUR CODE HERE
  //

  // logs the actual query being run
console.log(query.sql);
};

deleteProduct = () => {
  console.log('Deleting all strawberry ice cream...\n');
  // Delete the flavor 'strawberry'
  //
  // YOUR CODE HERE
  //
  const deleteStrawberry = `DELETE FROM products
  WHERE flavor = "strawberry"`
  const query = connection.query(deleteStrawberry, function(err, res) {
    if (err) throw err;
    console.log(res.affectedRows + ' product deleted!\n');
  })// Include the callback function to catch any errors,
  // log how many products were deleted,
  // and call the readProducts() AFTER the DELETE completes
  //
  // YOUR CODE HERE
  //

  // logs the actual query being run
  console.log(query.sql);
};

readProducts = () => {
  console.log('Selecting all products...\n');
  const sql = `SELECT * FROM products`;
  connection.query(sql, function(err, result, fields){
    if (err) throw err;
    console.log(result);
  })
  // Write a simple query that will SELECT everything from the 'products' table
  // Log the results in the console
  //
  // YOUR CODE HERE
  //
  connection.end();
};
