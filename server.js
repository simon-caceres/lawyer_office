const express = require('express');

const app = express()

app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/public'));

app.get("/api", (req, res) => {
    res.json({"users": ["one", "two", "three"]})
})

app.get('/', function (req, res)
{
    res.render('index.html');
});

app.listen(5000, () => {
    console.log("server is on" , 5000)
})