const express = require('express')
const server = express();
const mongoose = require('mongoose');
const productsRouters = require('./routes/Products')
const categoriesRouters = require('./routes/Categories')
const cors = require('cors')


server.use(cors());
server.use(express.json())
server.use('/products', productsRouters.router)
server.use('/categories', categoriesRouters.router)



main().catch(err=> console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/agroxplanet');
    console.log("connected to mongoDB")
}

server.get('/',(reg, res)=>{
    res.json({statusbar: 'success' })
})


server.listen(8080, ()=>{
    console.log("server is listening on port 8080")
})