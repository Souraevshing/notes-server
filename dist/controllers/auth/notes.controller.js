"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNote = exports.getNotes = exports.deleteNote = exports.createNote = void 0;
const supabase_1 = __importDefault(require("../../lib/supabase"));
const createNote = async (req, res) => {
    const { title, content } = req.body;
    const { data, error } = await supabase_1.default
        .from("notes")
        .insert([{ title, content, user_id: req.user?.id }]);
    if (error)
        return res.status(400).json({ error: error.message });
    res.json(data);
};
exports.createNote = createNote;
const getNotes = async (req, res) => {
    const { data, error } = await supabase_1.default
        .from("notes")
        .select("*")
        .eq("user_id", req.user?.id);
    if (error)
        return res.status(400).json({ error: error.message });
    res.json(data);
};
exports.getNotes = getNotes;
const updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const { data, error } = await supabase_1.default
        .from("notes")
        .update({ title, content })
        .eq("id", id)
        .eq("user_id", req.user?.id);
    if (error)
        return res.status(400).json({ error: error.message });
    res.json(data);
};
exports.updateNote = updateNote;
const deleteNote = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase_1.default
        .from("notes")
        .delete()
        .eq("id", id)
        .eq("user_id", req.user?.id);
    if (error)
        return res.status(400).json({ error: error.message });
    res.json(data);
};
exports.deleteNote = deleteNote;
