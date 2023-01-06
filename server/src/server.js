const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")

const dotenv = require('dotenv');
dotenv.config();
console.log(`Your port is ${process.env.DBNAME}`);

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Routes
const usersRoutes = require("./routes/users")
app.use("/users", usersRoutes) 

// MongoDB Connection

const dbConfig = process.env.ENPOINT
const dbName = process.env.DBNAME
 
mongoose.set('strictQuery', false)

mongoose.connect(`${dbConfig}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log("listening on port ", port)
})