import express from "express";
import { createUser, getAllUsers } from "../controllers/userController.js";

const router = express.Router();

//>>=================user Routes====================>>
router.get("/", getAllUsers); //done
router.post("/create", createUser); //done

export default router;
