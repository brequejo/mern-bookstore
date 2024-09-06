import { Book } from "../../models/index.js";

const listBookByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);

    return res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export default listBookByIdController;
