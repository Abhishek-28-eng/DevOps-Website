import express from "express";
import { createNote, getAllNotes, deleteNote } from "../controllers/notesController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", authMiddleware,createNote);
router.get("/", getAllNotes);
router.delete("/:id", deleteNote);

export default router;
