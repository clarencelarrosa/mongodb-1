const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function updateDataByName(nameToUpdate, newData) {
  try {
    await client.connect();

    const database = client.db('DatabaseCreation');
    const collection = database.collection('MyCol');

    const filter = { name: nameToUpdate }; 
    const updateDocument = {
      $set: newData 
    };

    const result = await collection.updateOne(filter, updateDocument); 

    if (result.modifiedCount === 1) {
      console.log(`Document with name '${nameToUpdate}' updated successfully.`);
    } else {
      console.log(`Document with name '${nameToUpdate}' not found or could not be updated.`);
    }
  } catch (e) {
    console.error('Error updating data in MongoDB Atlas', e);
  } finally {
    await client.close();
  }
}

const nameToUpdate = 'user3';
const newData = { name: 'Updated Name', age: 25, email: 'updated@example.com' };

updateDataByName(nameToUpdate, newData);
