const express = require("express");
require("dotenv").config();

const itemsRoute = require("./routes/items");

const app = express();

const PORT = process.env.PORT || 8080;

console.log(process.env.PORT);

app.use("/api/items", itemsRoute);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
