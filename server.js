const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "moose",
  database: "watchlist_db",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

app.get("/", (req, res) => {
  res.send("All my movies will go here.");
});

app.get("/movies/:id", (req, res) => {
  res.send("A single movie will go here.");
});

app.get("/movies/:id/edit", (req, res) => {
  res.send("A form to update the movie will go here.");
});

app.get("/movies/new", (req, res) => {
  res.send("A form to create a new movie will go here.");
});

app.post("/api/movies", (req, res) => {
  res.send(
    "After creating a new movie in the database, I will return a response."
  );
});

app.put("/api/movies/:id", (req, res) => {
  res.send("After updating a movie by ID, I will return a response.");
});

app.delete("/api/movies/:id", (req, res) => {
  res.send(
    "After deleting a new movie in the database, I will return a response."
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
