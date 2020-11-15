const router = require("express").Router();
const { db } = require("../firebase");

router.get("/", (_req, res) => {
	let data = [];

	db.collection("photos")
		.orderBy("created_at", "desc")
		.get()
		.then((snapshot) => {
			snapshot.forEach((doc) => {
				data.push({ id: doc.id, ...doc.data() });
			});
			res.status(200).json({ status: 200, message: "success", data });
		})
		.catch((error) => {
			console.log(error);
			res
				.status(500)
				.json({ status: 500, message: "Something went wrong. Try again" });
		});
});

router.post("/", (req, res) => {
	const { label, url } = req.body;
	const created_at = Date.now();
	db.collection("photos")
		.add({
			label,
			url,
			created_at,
		})
		.then((doc) => {
			const data = {
				id: doc.id,
				label,
				url,
				created_at,
			};

			res.status(201).json({ status: 201, message: "success", data });
		})
		.catch((err) => {
			console.log(err);
			res
				.status(500)
				.json({ status: 500, message: "Something went wrong. Try again" });
		});
});

router.delete("/:id", (req, res) => {
	const { id } = req.params;
	db.collection("photos")
		.doc(id)
		.delete()
		.then(() => {
			res.status(201).json({ status: 201, message: "success" });
		})
		.catch((err) => {
			console.log(err);
			res
				.status(500)
				.json({ status: 500, message: "Something went wrong. Try again" });
		});
});

module.exports = router;
