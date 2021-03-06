module.exports = app => {
    const game = require("../controllers/homepage.controller.js");
    var router = require("express").Router();
    const cors = require("cors");

    const bodyParser = require("body-parser");
    router.use(bodyParser.json());
    router.use(cors());

    router.get("/", game.highscore);
 router.get("/allquiz/:cat", game.findAll);

    app.use('/api/homepage', router);

}
