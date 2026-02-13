import cors from "cors";
import express from "express";

import authRoutes from "./routes/auth/auth.route";
import notesRoutes from "./routes/notes/notes.route";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/notes", notesRoutes);

export default app;
