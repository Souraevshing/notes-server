import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

import authRoutes from "./routes/auth/auth.route";
import notesRoutes from "./routes/notes/notes.route";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/notes", notesRoutes);

export default app;
