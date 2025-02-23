const mongoose = require("mongoose")
const Drugs = require("../routes/drugRoute")

const register = async (req, res) => {
    try {
        const { fullName, email, pharmacyName, address } = req.body
        if (!fullName || !email || !pharmacyName || !address) {
            return res.status(400).json({ msg: "Some fields missing"})
        }
        const user = await Drugs.create({ fullName, email, pharmacyName, address })
        return res.status(201).json({ msg: "Drugs addedd successfully", user })
    }
    catch (error) {
        console.log("error occured adding drugs", error)
        return res.status(400).send({ msg: "error occured adding drugs \n", error })
    }
}

const login = async () => {
    try {
        const drugs = await Drugs.find()
        return res.status(201).json({ msg: "Drugs fetched successfully", drugs })
    }
    catch (error) {
        console.log("error occured fetching drugs", error)
        return res.status(201).json({ msg: "error occured fetching drugs", error })
    }
}


module.exports = { register, login }