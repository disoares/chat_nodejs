const express = require("express");

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

let messages = [];

module.exports = {
    chatServer: function chatServer(port) {

        io.on('connection', socket => {
            //console.log(`Socket conectado: ${socket.id}`);

            socket.emit('previousMessages', messages);

            socket.on("sendMessage", data => {
                messages.push(data);
                socket.broadcast.emit('receivedMessage', data);
            })

            socket.on('end', () => {

                var messageObject = {
                    author: "Sistema",
                    message: "Chat encerrado!"
                }

                messages.push(messageObject);

                socket.broadcast.emit("exitConfirm", messageObject);
                socket.disconnect(0);
            })

        })

        server.listen(port);
    }
}