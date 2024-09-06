import express from "express";

import {
  listBooksController,
  listBookByIdController,
  saveBookController,
  updateBookController,
} from "../controllers/books/index.js";

const router = express.Router();

router.get("/books", listBooksController);
router.get("/books/:id", listBookByIdController);

router.post("/books", saveBookController);

router.put("/books/:id", updateBookController);

export default router;
