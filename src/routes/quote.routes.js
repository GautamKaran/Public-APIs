import { Router } from "express";
import { getrandomquote } from "../controllers/quote.controllers.js";

const router = Router();

router.route("/").get(getrandomquote);

export default router;
