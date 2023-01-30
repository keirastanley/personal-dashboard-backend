import express from "express";
const tasksRouter = express.Router();
import {getTasks, getTaskById, addNewTask, deleteTask} from "../services/tasks.js"

tasksRouter.get("/", async function (req, res) {
    const result = await getTasks();
    res.json({success: true, payload: result})
})

tasksRouter.get("/:id", async function (req, res) {
    const result = await getTaskById(req.params.id);
    res.json({success: true, payload: result})
})

tasksRouter.post("/", async function (req, res) {
    console.log(req.body)
    const result = await addNewTask(req.body);
    res.json({success: true, payload: result})
})

tasksRouter.delete("/:id", async function (req, res) {
    const result = await deleteTask(req.params.id);
    res.json({success: true, payload: result})
})

export default tasksRouter;