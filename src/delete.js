const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function deleteDataByName(nameToDelete) {
  try {
    await client.connect();

    const database = client.db('DatabaseCreation');
    const collection = database.collection('MyCol');

    const filter = { name: nameToDelete }; 

    const result = await collection.deleteOne(filter); 

    if (result.deletedCount === 1) {
      console.log(`Document with name '${nameToDelete}' deleted successfully.`);
    } else {
      console.log(`Document with name '${nameToDelete}' not found or could not be deleted.`);
    }
  } catch (e) {
    console.error('Error deleting data from MongoDB Atlas', e);
  } finally {
    await client.close();
  }
}

const nameToDelete = 'Updated Name';

deleteDataByName(nameToDelete);
