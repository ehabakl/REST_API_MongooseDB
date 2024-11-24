const express = require("express")
const router = express.Router()
const EntityMember = require("../models/entityMemberModel") // import the entity model //capital "E"
// const Entity = require("../models/entityModel");
// const Member = require("../models/memberModel");
router.get("/", async (req,res) =>{
    try{                          // the one in line3
        const entityMembers = await  EntityMember.find() //capital "E" //used to retrieve documents from the collection.
        res.json(entityMembers)                                    //By default,  it will return all the documents in the "entites" collection.
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

router.post("/",async (req,res) =>{
    const entitymember = new EntityMember({//capital "E" 
        _id:req.body._id ,
        name:req.body.name,
        entityId:req.body.entityId,
        memberId:req.body.memberId
    })
    try{
        // const newFind = await entitymember.findById()
        const newEntityMember = await entitymember.save()
        res.status(201).json(newEntityMember)

    }catch(err){
        res.status(400).json({message: err.message})

    }
})


module.exports = router