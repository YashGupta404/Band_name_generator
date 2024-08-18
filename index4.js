import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url)); // To get the file directory while hosting in a cloud

const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({ extended: true })); // Use this so that any req has body attribute in key value pairs
// body-parser understands the key through html names like "pet name" and "street name" and value through user input

function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
} // Bandname generator middleware

app.use(bandNameGenerator); // The middleware

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html"); // req - client req to get something, res - server respond to req by giving client the html
});

app.post("/submit", (req, res) => {
  //req - client req to post something , res - server respond my using client's inputs
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
//<form action="/submit" method="POST"> this is what the form is gonna do when i click submit, it will send a post "/submit" request so the above post handler would be executed
