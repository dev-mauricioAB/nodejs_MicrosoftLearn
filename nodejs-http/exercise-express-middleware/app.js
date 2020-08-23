const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/users", (req, res) => {
  res.json([
    {
      id: 1,
      name: "User Userson",
    },
    {
      id: 2,
      name: "Other User",
    },
  ]);
});

app.get("/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "The Bluest Eye",
    },
    {
      id: 2,
      name: "The red head",
    },
  ]);
});

app.get("/products/:id", (res, req) => {
  console.log(req);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
