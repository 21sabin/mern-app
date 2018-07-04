const express=require("express");
const router=express.Router();

const Item=require('../../models/Item');

router.get("/",(req,res)=>{
    Item.find()
    .sort({data:-1})
    .then(item=>res.json({
        data:item,
        success:true
    }))
});

router.post("/",(req,res)=>{
    console.log(req.body,"post roue")
    const newItem=new Item({
        name:req.body.name
    })
    newItem.save().then((item)=>{
        res.json(item)
    })
});

router.delete("/:id",(req,res)=>{
    Item.findById(req.params.id)
    .then(item=>item.remove().then(data=>res.json({success:true})))
    .catch(err=>res.json({success:false}))
});

module.exports=router;