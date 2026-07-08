import express from "express";
import bodyParser from "body-parser";
import animeRoutes from "./routes/animeRoutes.js"; // Import router mới tạo


import recentAnimes from "./public/data/recent.json" with {type: "json"};
import hotTvs from "./public/data/hot-tv.json" with {type: "json"};
import hotMovies from "./public/data/hot-movie.json" with {type: "json"};
import hotOvas from "./public/data/hot-ova.json" with {type: "json"};
import weeklyAnimes from "./public/data/weekly.json" with {type: "json"};

const app = express();
const port = 3000;


const allRecentAnimes = recentAnimes.data.slice(0, 10);
const allHotTv = hotTvs.data.slice(0, 10);
const allHotMovies = hotMovies.data.slice(0, 10);
const allHotOvas = hotOvas.data.slice(0, 10);
const allWeeklyAnimes = weeklyAnimes.data.slice(0, 7);

app.use(bodyParser.urlencoded({ extended: true }));


app.use((req, res, next) => {
    res.locals.recentAnimes = allRecentAnimes;
    res.locals.hotTvs = allHotTv;
    res.locals.hotMovies = allHotMovies;
    res.locals.hotOvas = allHotOvas;
    res.locals.weeklyAnimes = allWeeklyAnimes;
    next();
});

app.use(express.static("public"));


app.use("/", animeRoutes);

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});