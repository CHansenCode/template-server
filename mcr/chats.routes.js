import express from "express";

import { getMyChats, postToChat, createChat } from "./chats.contr.js";

const router = express.Router();

//GET
router.get("/:id", getMyChats);

//POST
router.post("/:id", postToChat);
router.post("/createChat", createChat);

//DELETE

//DEV TO BE DELETED

export default router;
