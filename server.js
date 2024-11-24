require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on("error",(error) =>console.log(error))
db.once("open",() =>console.log("connected to data base"))


app.use(express.json())

const entitiesRouter = require("./routes/entitiesRoute") //import the route
app.use("/entities" , entitiesRouter)  // mount

const memberRouter = require("./routes/membersRoute") //import the route
app.use("/members" , memberRouter) // mount

const entityMembersRouter = require("./routes/entityMembersRoute") //import the route
app.use("/entitymembers" , entityMembersRouter) // mount

app.listen(5000,() => console.log("server started" ))