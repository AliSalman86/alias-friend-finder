// The code below would link the routes to sort of data sources, to post and get data from

var FriendsTable = require("../data/friends");

// =======
// Routes:
// =======

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(tableData);
    });

    app.post("/api/survey", function(req, res) {
        if (tableData < 5) {
            tableData.push(req.body);
            res.json(true);
        } else {
            waitlistData.push(req.body);
            res.json(false);
        }
    });

    app.post("/api/clear", function(req, res) {
        tableData = [];
        waitlistData = [];

        console.log(tableData);
    });

};