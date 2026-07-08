import express from "express";
import JikanService from "../services/JikanService.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("index.ejs", { pageCss: "index.css" });
});

router.get("/genre-search", async (req, res, next) => {
    try {
        const datas = await JikanService.getAnimeByGenre(req.query.genreId);
        res.render("genre.ejs", { pageCss: "season.css", datas: datas });
    } catch (error) {
        next(error); // Đẩy lỗi xuống cho Error Handler
    }
});

router.get("/season-search", async (req, res, next) => {
    try {
        const datas = await JikanService.getAnimeBySeason(req.query.year, req.query.season);
        res.render("season.ejs", { pageCss: "season.css", datas: datas });
    } catch (error) {
        next(error);
    }
});

router.get("/detail", async (req, res, next) => {
    try {
        const data = await JikanService.getAnimeDetail(req.query.id);
        res.render("detail.ejs", { pageCss: "detail.css", data: data });
    } catch (error) {
        next(error);
    }
});

router.get("/random", async (req, res, next) => {
    try {
        const randomAnime = await JikanService.getRandomAnime();
        res.render("detail.ejs", { pageCss: "detail.css", data: randomAnime });
    } catch (error) {
        next(error);
    }
});

router.get("/search", async (req, res, next) => {
    try {
        const query = req.query.query;
        const searchResults = await JikanService.searchAnime(query);
        res.render("search.ejs", { pageCss: "search.css", searchResults: searchResults, query: query });
    } catch (error) {
        next(error);
    }
});

export default router;