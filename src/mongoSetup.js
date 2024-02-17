const { MongoClient } = require('mongodb');

// Connection URI for MongoDB Atlas
const uri = 'mongodb://localhost:27017';

// Create a new MongoClient
const client = new MongoClient(uri);

async function connectToMongoDB() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();

    console.log('Connected to MongoDB Atlas');

    // Access the database and collection
    const database = client.db('<DatabaseCreation>');
    const collection = database.collection('<MyCol>');

    // Perform database operations here

  } catch (e) {
    console.error('Error connecting to MongoDB Atlas', e);
  } finally {
    // Close the client connection
    await client.close();
  }
}

connectToMongoDB();
