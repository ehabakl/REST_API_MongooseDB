const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose")

const memberSchema = new mongoose.Schema({
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
      ar_full_name: {
        type: String,
        required: true
      },
      ar_first_name: {
        type: String,
        required: true
      },
      ar_middle_name: {
        type: String,
        required: true
      },
      ar_last_name: {
        type: String,
        required: true
      },
      en_full_name: {
        type: String,
        required: true
      },
      en_first_name: {
        type: String,
        required: true
      },
      en_middle_name: {
        type: String,
        required: true
      },
      en_last_name: {
        type: String,
        required: true
      }
    
}) 
                           //name of the model in the data base
module.exports = mongoose.model("Member" ,memberSchema )// schema that corresponds to the model 
                               //capital S             