const express = require("express");
const path = require("path");
const app = express();

const chat = require("./server");

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine("html", require('ejs').renderFile);
app.set('view engine', 'html');

app.use("/", (req, res) => {
    res.render('index.html');
});

// Inicia uma instancia do chat na porta xxxx
chat.chatServer(3000);

app.listen(8081, function () {
    console.log("Servidor rodando!");
});