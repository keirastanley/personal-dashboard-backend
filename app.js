import express from "express";
import cors from "cors";
import poemsRouter from "./routes/poems.js"
import artRouter from "./routes/art.js"

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors('*'))

app.use("/api/poems", poemsRouter);
app.use("/api/art", artRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});