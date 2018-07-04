const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require("body-parser");
const path=require('path');

const app=express();

app.use(bodyParser.json());
const keys=require('./config/keys');

mongoose.connect(keys.mongoUrl)
.then(()=>console.log("mongodb connected successfully"))
.catch(()=>console.log("error in connection"));

const routes=require('./routes/api/item');

app.use('/api/items',routes);

// Express only serves static assets in production
if(process.env.NODE_ENV==="production"){
    app.use(express.static("/client/build"));

    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

const port=process.env.PORT || 5000;

app.listen(port,()=>console.log(`server started at ${port}`))