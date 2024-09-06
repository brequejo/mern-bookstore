import express from "express";
import bookRoutes from "./bookRouter.js";

const router = express.Router();

router.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome the The Library");
});

router.use(bookRoutes);

export default router;
