import express from "express";
const poemsRouter = express.Router();
import {getPoems, addNewPoem} from "../models/poems.js"

poemsRouter.get("/", async function (req, res) {
    const result = await getPoems();
    res.json({success: true, payload: result})
})

poemsRouter.post("/", async function (req, res) {
    const result = await addNewPoem(req.body);
    res.json({success: true, payload: result})
})

export default poemsRouter;