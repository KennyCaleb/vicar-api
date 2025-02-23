const mongoose = require("mongoose")

async function connectDb() {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database connected successfully: ${connect.connection.host}, ${connect.connection.name}`)
    }
    catch (error) {
        console.log("Error connecting to database", error)
        process.exit(1)
    }

}

module.exports = connectDb