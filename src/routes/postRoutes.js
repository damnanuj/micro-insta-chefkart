import express from "express";
import {
  getAllPosts,
  createPost,
  getAllPostsOfUser,
  deletePost,
  editPost,
} from "../controllers/postController.js";

const router = express.Router();

// >>=============Posts Routes==========================>>
router.get("/", getAllPosts); //done
router.get("/:userId", getAllPostsOfUser); //done
router.post("/create", createPost); //done
router.delete("/:userId/:postId", deletePost); //done
router.put("/:userId/:postId", editPost); //done

export default router;
