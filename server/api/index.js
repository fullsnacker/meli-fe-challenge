import express from "express";
import "dotenv/config.js";

import itemsRoute from "./routes/items.js";

const app = express();

/**
 * Manejo de CORS y configuraciones
 */

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET,HEAD,OPTIONS,POST,PUT,DELETE"
	);
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
	);
	res.setHeader("Cache-Control", "no-cache");
	next();
});

const PORT = process.env.PORT || 3000;

/**
 * Reenvio todos los pedidos de /api/items* a la route items
 */

app.use("/api/items", itemsRoute);

/**
 * Prueba de servidor
 */
app.get("/", (req, res) => {
	res.send("El servidor esta activo! 🥳");
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
