import express from "express";
import { listBlogs, getBlogBySlug, createBlog, updateBlog, deleteBlog, stats } from "../controllers/blogController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { upload } from "../utils/multer.js";

const router = express.Router();

// public
router.get("/", listBlogs);
router.get("/stats", authMiddleware, stats); // admin only (protected)
router.get("/:slug", getBlogBySlug);

// admin routes
router.post("/", authMiddleware, upload.single("feature_image"), createBlog);
router.put("/:id", authMiddleware, upload.single("feature_image"), updateBlog);
router.delete("/:id", authMiddleware, deleteBlog);

export default router;
