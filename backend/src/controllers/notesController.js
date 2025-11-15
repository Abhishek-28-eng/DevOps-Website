import { Note } from "../models/Notes.js";

export const createNote = async (req, res) => {
  try {
    const { title, category, pdf_link } = req.body;

    if (!title || !category || !pdf_link) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const note = await Note.create({ title, category, pdf_link });

    res.status(201).json({
      message: "Note added successfully",
      note
    });
  } catch (error) {
    console.error("Create Note Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.findAll({ order: [["id", "DESC"]] });
    res.json(notes);
  } catch (error) {
    console.error("Get Notes Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findByPk(id);

    if (!note) return res.status(404).json({ message: "Note not found" });

    await note.destroy();

    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Delete Note Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
