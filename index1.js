import express from "express";
import bodyParser from "body-parser"; // The middleware to parse the information given in client side
import { dirname } from "path"; // The 3 lines below are used to get the directory of the file while hosting on
//a cloud
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); // using body-parser urlencoded for forms

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html"); // This get the request to access the website and sends the html file attached to that webpage
});

app.post("/submit", (req, res) => {
  console.log(req.body);
}); // /submit comes from the html action: /submit part to show where the client will post information

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
