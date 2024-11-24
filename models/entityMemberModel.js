const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose")

const entityMemberSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4 
      }
      ,
      name: {
        type: String,
        required: true
      },
      entityId: { type: String, ref: "entityModel", required: true },
      memberId: { type: String, ref: "MemberModel", required: true }
     
}) 
                           //name of the model in the data base
module.exports = mongoose.model("EntityMember" , entityMemberSchema )// schema that corresponds to the model 
                               //capital "E"            