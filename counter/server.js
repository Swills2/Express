var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
// new code:
var session = require('express-session');
// more new code:
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var count = 0


app.get('/', function(req, res) {
    count ++;
    console.log(count);

    res.render("index", {count: count});
})

app.post('/dub', function(req, res) {
    count++;
    console.log(count);
    res.redirect("/");
})

app.post('/del', function(req, res){
    count = 0;
    console.log(count);
    res.redirect("/");
})

app.listen(8000, function() {
 console.log("listening on port 8000");
});