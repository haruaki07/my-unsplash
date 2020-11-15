const admin = require("firebase-admin");
var serviceAccount = require("./firebase-service-account.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: process.env.FIREBASE_DB_URL,
});

exports.db = admin.firestore();
