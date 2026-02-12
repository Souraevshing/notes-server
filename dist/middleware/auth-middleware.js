"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supabase_1 = __importDefault(require("../lib/supabase"));
const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ error: "No token provided" });
    }
    const { data, error } = await supabase_1.default.auth.getUser(token);
    if (error || !data.user)
        return res.status(401).json({ error: "Invalid token" });
    req.user = data.user;
    next();
};
exports.default = authMiddleware;
