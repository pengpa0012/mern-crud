const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const connectDB = require("./config/db");

const dotenv = require('dotenv');
dotenv.config();
connectDB();

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Routes
const usersRoutes = require("./routes/users");
app.use("/users", usersRoutes) 

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log("listening on port ", port)
})