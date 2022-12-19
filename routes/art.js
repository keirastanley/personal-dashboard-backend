import express from "express";
const artRouter = express.Router();
import {getArt, addNewItem, deleteItem} from "../services/art.js"

artRouter.get("/", async function (req, res) {
    const result = await getArt();
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