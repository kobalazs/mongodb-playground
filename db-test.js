const { MongoClient } = require('mongodb');

async function main() {
  const uri = 'mongodb+srv://admin:123qwe@cluster0.myhqz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    await client.connect();
    console.log(await client.db().admin().listDatabases());
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
