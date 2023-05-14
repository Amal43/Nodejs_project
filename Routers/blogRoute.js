
const express = require('express')
const route=express.Router();
const path=require('path');
const  Blog=require('../Models/blog');


route.get('/:id',async function(req,res)
{
    let blog= await Blog.findOne({_id:req.params.id})
    res.send(blog);
}) 





module.exports=route;