import express from "express";

import verifyToken from "../token/verifyToken.js";

import {
  getAll,
  getOneById,
  createOne,
  updateOneByID,
  deleteOneByID,
} from "./media.contr.js";

const router = express.Router();

//GET
router.get("/", getAll);
router.get("/:id", getOneById);

//POST
router.post("/", createOne);

//PATCH
router.patch("/:id", updateOneByID);

//DELETE
router.delete("/:id", deleteOneByID);

export default router;
