const mongoose = require("mongoose")
const { boolean } = require("webidl-conversions")

const drugSchema = new mongoose.Schema(
    {
        batchNumber: String,
        counterfeitRisk: boolean,
        drug: String,
        forecast: Number,
        restockAt: Number,
        unitsLeft: Number
    },
    {
        timestamps: true
    }
)

const Drugs = mongoose.model("drugs", drugSchema)
module .exports = Drugs