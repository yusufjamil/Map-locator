const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const mongoPractice=require('./Mongo')
app.use(bodyParser.json());
app.post('/products', mongoPractice.createProducts);
app.get('/products');
app.listen(5500,()=>{console.log("listening on port 5500")});