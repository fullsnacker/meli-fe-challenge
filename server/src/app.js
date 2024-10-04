import express from "express";
import "dotenv/config.js";

import itemsRoute from "./routes/items.js";

const app = express();

const PORT = process.env.PORT || 8080;

app.use("/api/items", itemsRoute);

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
