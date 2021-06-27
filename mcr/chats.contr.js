import express from "express";
import mongoose from "mongoose";
// import bcrypt from "bcrypt";
// import jsonwebtoken from "jsonwebtoken";

//init
const router = express.Router();

//MODEL
import Chats from "./chats.model.js";

const model = Chats;

//WORK IN PROGRESS
export const getMyChats = async (req, res) => {
  //user id
  const id = req.params.id;
  const filterByName = "saracadmin";

  //Get all chats that id participates in
  const chats = model.find({ $all: { name: filterByName } });

  try {
    res.status(201).json(chats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//POST/UPDATE
export const postToChat = async (req, res) => {
  const message = req.body.message;
  const id = req.params.id;

  try {
    await model.findByIdAndUpdate(id, {
      $push: { messages: { message: message } },
    });
    res.status(201).json("Message added to chat");
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

//CREATE NEW CHAT
export const createChat = async (req, res) => {
  const post = req.body;
  const newChat = new model(post);

  try {
    await newChat.save();
    res.status(201).json(newChat);
  } catch (error) {
    res.status(409).json({ messages: error.message });
  }
};

export default router;
