import { MongoClient, ServerApiVersion } from "mongodb";

// get connection string from env file
if (!process.env.DB_URL) {
	throw new Error("DB_URI is not defined");
}

// create a client
const client = new MongoClient(process.env.DB_URL, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

// connect to the database
async function getDB(dbName) {
	try {
		await client.connect();
		return client.db(dbName);
	} catch (error) {
		throw error;
	}
}

// get collections
export async function getCollections(collectionName) {
	const db = await getDB("kira_db");
	if (db) {
		return db.collection(collectionName);
	}
	return null;
}
