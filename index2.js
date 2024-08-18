import express from "express";
import morgan from "morgan";
const app = express();
const port = 3000;

app.use(morgan("tiny")); // to get information on the type of request the success code etc. It's a logger middleware

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
