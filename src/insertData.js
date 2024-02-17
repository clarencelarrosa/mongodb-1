const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri);

async function insertData() {
  try {
    await client.connect();

    console.log('Connected to MongoDB Atlas');

    const database = client.db('DatabaseCreation');
    const collection = database.collection('MyCol');

    const data = { name: 'user3', age: 16, email: 'user3@example.com' };

    const result = await collection.insertOne(data);
    console.log(`Inserted ${result.insertedCount} document`);

  } catch (e) {
    console.error('Error inserting data into MongoDB Atlas', e);
  } finally {
    
    await client.close();
  }
}

insertData();
