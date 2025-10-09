import express from "express"
import {apiIntro, getAllLanguages, getFilteredLanguages, getRandomLanguage} from "../controllers/controller.js"

const router = express.Router();

router.get("/", (req,res) => {
    res.status(301).redirect("/api/techs/learn_api");
})

router.get("/learn_api", apiIntro);

router.get("/all_languages", getAllLanguages);

router.get("get_random_language", getAllLanguages);

router.get("/filter", getFilteredLanguages);

export {router};

