const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose")

const entitySchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4 
      }
      ,
      name: {
        type: String,
        required: true
      }
      ,
      ar_name: {
        type: String,
        required: true
      },
      en_name: {
        type: String,
        required: true
      } 
}) 
                           //name of the model in the data base
module.exports = mongoose.model("Entity" , entitySchema )// schema that corresponds to the model 
                               //capital S             