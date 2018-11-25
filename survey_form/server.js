var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    console.log("I am working");
    res.render("index");
});

app.use(express.static(__dirname + "/static"));

app.set("views", __dirname + "/views");

app.set("view engine", "ejs");

app.post("/result", function (req, res) {

    var dojo_user_form = {
        name: req.body.name,
        dojo_location: req.body.dojo_location,
        fav_language: req.body.fav_language,
        comment: req.body.comment

    };

    console.log(dojo_user_form);

    res.render("result", { dojo_user: dojo_user_form });
});

app.post("/gohome", function (req, res) {

    res.redirect("/");


});

app.listen(8000, function() {
    console.log("listening on port 8000");
   });