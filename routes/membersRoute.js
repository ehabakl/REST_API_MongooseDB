const express = require("express")
const router = express.Router()
const Member = require("../models/memberModel") // import the entity model //capital S

router.get("/", async (req,res) =>{
    try{                          // the one in line3
        const members = await  Member.find() //capital "S" //used to retrieve documents from the collection.
        res.json(members)                                    //By default,  it will return all the documents in the "entites" collection.
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

router.post("/",async (req,res) =>{
    const member = new Member({//capital "S" 
        _id:req.body._id ,
        name:req.body.name ,
        ar_full_name:req.body. ar_full_name ,
        ar_first_name:req.body.ar_first_name ,
        ar_middle_name:req.body.ar_middle_name,
        ar_last_name:req.body.ar_last_name ,
        en_full_name:req.body.en_full_name ,
        en_first_name:req.body. en_first_name ,
        en_middle_name:req.body. en_middle_name ,
        en_last_name:req.body. en_last_name

    })
    try{
        const newMember= await member.save()
        res.status(201).json(newMember)

    }catch(err){
        res.status(400).json({message: err.message})

    }
})


module.exports = router