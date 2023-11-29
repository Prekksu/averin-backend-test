const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const productRoute = require("./routers/productRoute");
const db = require("./models");
// db.sequelize.sync({ alter: true });

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());

// ===========================

app.use("/api/product", productRoute);

// ===========================

// not found
app.use((req, res, next) => {
	if (req.path.includes("/api/")) {
		res.status(404).send("Not found !");
	} else {
		next();
	}
});

app.listen(PORT, (error) => {
	if (error) {
		console.log(`ERROR: ${error}`);
	} else {
		console.log(`APP RUNNING at ${PORT} ✅`);
	}
});
