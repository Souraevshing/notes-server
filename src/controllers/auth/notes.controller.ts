import { Request, Response } from "express";

import supabase from "../../lib/supabase";

const createNote = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  const { data, error } = await supabase
    .from("notes")
    .insert([{ title, content, user_id: req.user?.id }])
    .select();
  if (error) return res.status(400).json({ error: error.message });
  return res.json(data);
};

const getNotes = async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from("notes")
    .select("*")
    .eq("user_id", req.user?.id);
  if (error) return res.status(400).json({ error: error.message });
  return res.json(data);
};

const updateNote = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content, is_favorite } = req.body;
  const userId = req.user?.id;

  const updateData: any = {};
  if (title !== undefined) updateData.title = title;
  if (content !== undefined) updateData.content = content;
  if (is_favorite !== undefined) updateData.is_favorite = is_favorite;

  const { data, error } = await supabase
    .from("notes")
    .update(updateData)
    .eq("id", id)
    .eq("user_id", userId)
    .select();

  if (error) return res.status(400).json({ error: error.message });
  return res.json(data);
};

const deleteNote = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("notes")
    .delete()
    .eq("id", id)
    .eq("user_id", req.user?.id)
    .select();
  if (error) return res.status(400).json({ error: error.message });
  return res.json(data);
};

export { createNote, deleteNote, getNotes, updateNote };
