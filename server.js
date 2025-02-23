// MODULES
const express = require("express")
const dotenv = require("dotenv")
const connectDb = require("./config/db")
const cors = require("cors")
// const usersRoute = require("./routes/drugRoute")
const drugsRoute = require("./routes/drugRoute")

// config
const app = express()
dotenv.config()

// SERVER   
connectDb()

// middlewares
app.use(express.json())
app.use(cors())
// app.use("/api/user", usersRoute)
app.use("/api/drugs", drugsRoute)

app.all("*", (req, res) => {
    return res.status(200).send({ msg: 'Welcome to vicar api' })
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})