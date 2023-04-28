const express = require('express');
const route = express.Router();
const CLAIMS = require('./ClaimFormSchema');
const Item = require("./ItemSchema");

const mongoose = require('mongoose');

route.get("/item", async (req, res) => {
    try {

        const result = await Item.find().sort({ _id: -1 });

        if (result)
            return res.status(200).send(result);
        else
            return res.status(404).send("NOT found data events");



    }
    catch (err) {
        // console.log(err);
        return res.status(422).send("cannot fetch data");
    }
})

route.get("/claim", async (req, res) => {
    try {

        const claims = await CLAIMS.find().sort({ _id: -1 });

        return res.status(200).send(claims);


    }
    catch (err) {
        // console.log(err);
        return res.status(500).send({ error: "cannot get user details" });
    }
})

route.post("/claim", async (req, res) => {
    console.log('assasa')

    const { name, phoneNo, color, brand, itemDescription, placeLost, email, catagory, subCatagory } = req.body

    const claimData = new CLAIMS({
        name: name,
        brandName: brand,
        phoneNo, phoneNo,
        color: color,
        itemDescription: itemDescription,
        placeLost: placeLost,
        email: email,
        catagory: catagory,
        subCatagory: subCatagory
    })
    console.log(claimData)
    const response = await claimData.save();
    res.status(200).send(response)
})


route.post("/item", async (req, res) => {

    try {

        const { reportingPersonName, brand, reportersPhoneNumber, placeOfLost, catagory, subCatagory } = req.body


        const itemData = new Item({ reportingPersonName, brand, reportersPhoneNumber, placeOfLost, catagory, subCatagory });

        console.log(itemData)
        const response = await itemData.save();

        res.status(200).send(response)


    }
    catch (err) {
        console.log(err);
    }

})


module.exports = route;