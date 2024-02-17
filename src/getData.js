const { MongoClient } = require('mongodb');


const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri);

async function getData() {
  try {
    await client.connect();

    console.log('Connected to MongoDB Atlas');

    const database = client.db('DatabaseCreation');
    const collection = database.collection('MyCol');

    const query = {};

    const cursor = collection.find(query);

    const documents = await cursor.toArray();

    console.log('Retrieved documents:');
    console.log(documents);

  } catch (e) {
    console.error('Error retrieving data from MongoDB Atlas', e);
  } finally {
    await client.close();
  }
}

getData();
