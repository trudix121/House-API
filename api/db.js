require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://house_api:Pfz9dqYxuXTwbfxq@main.9fbvhcv.mongodb.net/?retryWrites=true&w=majority&appName=Main";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function findbypostalcode(postal_code){
    const db = client.db('house_api').collection('data')
    const result = await db.findOne({'zip_code':`${postal_code}`})
    if(result){
        return result
    }

}

async function findByPrice(price, type, price2 = 0) {
  const db = client.db('house_api').collection('data');

  if (type === 'lower') {
    const result = await db.find({ 'price': { $lte: Number(price) } }).toArray();
    return result.length > 0 ? result : null;
  } else if (type === 'higher') {
    const result = await db.find({ 'price': { $gte: Number(price) } }).toArray();
    return result.length > 0 ? result : null;
  } else if (type === 'range') {
    const result = await db.find({
      'price': { $gte: Number(price), $lte: Number(price2) }
    }).toArray();
    return result.length > 0 ? result : null;
  }
}
// FIND BY STATE
async function findByState(state){
  const db = client.db('house_api').collection('data')
  const result = await db.find({'state':`${state}`}).toArray()
  return result.length > 0 ? result :null
}
// FIND BY CITY
async function findByCity(city){
  const db = client.db('house_api').collection('data')
  const result = await db.find({'city':`${city}`}).toArray()
  return result.length > 0 ? result :null
}
// FIND BY ACRE (for now only exactly)
async function findByAcre(size){
  const db = client.db('house_api').collection('data')
  const result = await db.find({'acre_lot':`${size}`}).toArray()
  return result.length > 0 ? result : null
}

// FIND ALL 
async function findAll(){
  const db = client.db('house_api').collection('data')
  const result = await db.find().toArray()
  return result
}

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    await client.db('house_api').collection('data').find().toArray().then((e)=>{
      console.log(e.length)
    })
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}



module.exports = {
    run,
    findbypostalcode,
    findByPrice,
    findByState,
    findByCity,
    findByAcre,
    findAll
}
