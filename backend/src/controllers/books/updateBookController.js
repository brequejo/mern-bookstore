import { Book } from "../../models/index.js";

const updateBookController = async (req, res, next) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }

    const { id } = req.params;

    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res.status(200).json({ message: "Book updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export default updateBookController;
