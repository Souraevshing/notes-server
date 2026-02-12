import express from "express";

import {
        createNote,
        deleteNote,
        getNotes,
        updateNote,
} from "../../controllers/auth/notes.controller";
import authMiddleware from "../../middleware/auth-middleware";

const router = express.Router();

router.post("/", authMiddleware, createNote);
router.get("/", authMiddleware, getNotes);
router.put("/:id", authMiddleware, updateNote);
router.delete("/:id", authMiddleware, deleteNote);

export default router;
