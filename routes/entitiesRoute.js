const express = require("express")
const router = express.Router()
const Entity = require("../models/entityModel") // import the entity model //capital S

router.get("/", async (req,res) =>{
    try{                          // the one in line3
        const entites = await  Entity.find() //capital "S" //used to retrieve documents from the collection.
        res.json(entites)                                    //By default,  it will return all the documents in the "entites" collection.
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

router.post("/",async (req,res) =>{
    const entity = new Entity({//capital "S" 
        _id:req.body._id ,
        name:req.body.name ,
        ar_name:req.body.ar_name ,
        en_name:req.body.en_name

    })
    try{
        const newEntity = await entity.save()
        res.status(201).json(newEntity)

    }catch(err){
        res.status(400).json({message: err.message})
    }
})


module.exports = router