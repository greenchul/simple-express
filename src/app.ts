import express from "express";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).send("Health check passed");
});

app.post("/hello", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).send(`Hello ${name}!!`);
  } else {
    res.send(400).send("no name entered");
  }
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
