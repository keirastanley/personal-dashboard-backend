import express from "express";
const artRouter = express.Router();
import {getArt, getItemsFromGallery, addNewItem, deleteItem} from "../services/art.js"

//Get from Met Museum
// artRouter.get("/", async function (req, res) {
//     const result = await getArt();
//     res.json({success: true, payload: result})
// })

artRouter.get("/", async function (req, res) {
    const result = await getItemsFromGallery();
    res.json({success: true, payload: result})
})

artRouter.post("/", async function (req, res) {
    const result = await addNewItem();
    res.json({success: true, payload: result})
})

artRouter.delete("/", async function (req, res) {
    const result = await deleteItem();
    res.json({success: true, payload: result})
})
export default artRouter;