# Steps
## Basic Setup
1. `touch server.js`
2. `npm init -y`
3. `npm install mysql express express-handlebars`
4. `npm install nodemon -D` - OPTIONAL
5. Build out the folder structure
6. Boilerplate to the main.handlebars

## Create your SQL schema and seeds
1. Drop database
2. Create database
3. Use database
4. Create tables
5. Insert seed data into tables

## Build out my server
1. Require the packages 
    a. express
    b. exphbs
    c. mysql
2. Create an instance of express
3. Create a PORT to listen on 
4. Listen on the PORT
5. Copy/paste the middleware
    a. JSON body parser
    b. Handlebars engine config
6. Create the MySQL connection
7. Connect to MySQL
8. Add routes 

## Building a single route
1. Test with `res.send`
2. Build out the query in MySQL Workbench
3. Call `connection.query` inside the route to return the data.
4. Call `res.render` with:
    a) The name of the file to render
    b) An object that includes the data we want to display
5. Rinse and repeat 