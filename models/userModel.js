const mongoose = require("mongoose")
const { boolean } = require("webidl-conversions")

const userSchema = new mongoose.Schema(
    {
        fullName: String,
        email: String,
        pharmacyName: String,
        address: String,
    },
    {
        timestamps: true
    }
)

const Users = mongoose.model("drugs", userSchema)
module.exports = users