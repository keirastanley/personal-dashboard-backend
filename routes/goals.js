import express from "express";
const goalsRouter = express.Router();
import {getGoals, getGoalById, addNewGoal, deleteGoal} from "../services/goals.js"

goalsRouter.get("/", async function (req, res) {
    const result = await getGoals();
    res.json({success: true, payload: result})
})

goalsRouter.get("/:id", async function (req, res) {
    const result = await getGoalById(req.params.id);
    res.json({success: true, payload: result})
})

goalsRouter.post("/", async function (req, res) {
    console.log(req.body)
    const result = await addNewGoal(req.body);
    res.json({success: true, payload: result})
})

goalsRouter.delete("/:id", async function (req, res) {
    const result = await deleteGoal(req.params.id);
    res.json({success: true, payload: result})
})

export default goalsRouter;