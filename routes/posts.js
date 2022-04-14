import express from "express";
import { getPosts, createPost, updateHeader } from "../controllers/posts.js";
import http from "http";
const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.put("/", updateHeader);

export default router;
