"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = exports.signIn = void 0;
const supabase_1 = __importDefault(require("../../lib/supabase"));
const signUp = async (req, res) => {
    const { email, password } = req.body;
    const { data, error } = await supabase_1.default.auth.signUp({ email, password });
    if (error) {
        return res.status(400).json({ error: error.message });
    }
    res.json(data);
};
exports.signUp = signUp;
const signIn = async (req, res) => {
    const { email, password } = req.body;
    const { data, error } = await supabase_1.default.auth.signInWithPassword({
        email,
        password,
    });
    if (error) {
        return res.status(400).json({ error: error.message });
    }
    res.json(data);
};
exports.signIn = signIn;
