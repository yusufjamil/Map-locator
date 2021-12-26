console.log("in mongo.js file")
const mongoClient=require('mongodb').MongoClient
const url='mongodb+srv://yusuf:jamilyusuf@cluster0.1kfha.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const createProducts=async(req,res,next)=>{
const newProducts={
    name:req.body.name,
    price:req.body.price
}
console.log("create client")
const client=new mongoClient(url)
try{
console.log("waiting for client connnection")
await client.connect()
console.log("getting db  instance")
const db=client.db()
console.log("tring to insert")
const result=await db.collection('products').insertOne(newProducts)
console.log("after insertion")
}catch(error)
{
    console.log(error)
  return res.json({message:'could not store data'})
}
client.close()
res.json(newProducts)
}
const getProducts=async(req,res,next)=>
{

}
exports.createProducts=createProducts
exports.getProducts=getProducts