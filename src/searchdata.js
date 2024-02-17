const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function searchData() {
  try {
    await client.connect();

    const database = client.db('DatabaseCreation');
    const collection = database.collection('MyCol');

    const query = { name: 'user3' }; 
    const result = await collection.find(query).toArray(); 

    if (result.length > 0) {
      console.log('Search results:', result); 
    } else {
      console.log('No results found.'); 
    }
  } catch (e) {
    console.error('Error searching data from MongoDB Atlas', e);
  } finally {
    await client.close();
  }
}

searchData();
