const path = require("path");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/photos", require("./routes/photos"));
app.get("/", (_req, res) => {
	res.send("Don't step on the broken glass.");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	try {
		console.log(`Server running on port ${port}`);
	} catch (error) {
		throw error;
	}
});
