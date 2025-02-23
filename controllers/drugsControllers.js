const mongoose = require("mongoose")
const Drugs = require("../models/drugsModel")

const addDrugs = async (req, res) => {
    try {
        const { drugs } = req.body
        const newDrugs = await Drugs.create(drugs)
        return res.status(201).json({ msg: "Drugs addedd successfully", drugs: newDrugs })
    }
    catch (error) {
        console.log("error occured adding drugs", error)
        return res.status(400).send({ msg: "error occured adding drugs \n", error })
    }
}

const getDrugs = async (req, res) => {
    try {
        const drugs = await Drugs.find()
        return res.status(201).json({ msg: "Drugs fetched successfully", drugs })
    }
    catch (error) {
        console.log("error occured fetching drugs", error)
        return res.status(201).json({ msg: "error occured fetching drugs", error })
    }
}


module.exports = { addDrugs, getDrugs }