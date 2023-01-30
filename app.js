import express from "express";
import cors from "cors";
import poemsRouter from "./routes/poems.js"
import artRouter from "./routes/art.js"
import tasksRouter from "./routes/tasks.js";
import goalsRouter from "./routes/goals.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors('*'))

app.use("/api/poems", poemsRouter);
app.use("/api/art", artRouter);
app.use("/api/tasks", tasksRouter);
app.use("/api/goals", goalsRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});