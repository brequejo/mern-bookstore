import { Book } from "../../models/index.js";

const listBooksController = async (req, res, next) => {
  try {
    const books = await Book.find({});

    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export default listBooksController;
