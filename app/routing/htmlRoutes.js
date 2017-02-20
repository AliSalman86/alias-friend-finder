// Dependencies:
// add the path npm package, it adds a useful path properties to the server

var path = require("path");

// =======
// Routes:
// =======

module.exports = function(app) {
// in case the user request unexisting path, default to home page

    app.get("/survey", function(req, res) {
        // res.send("Welcome to Starwars page");
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    app.use(function(req, res) {
        // res.send("Welcome to Starwars page");
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};