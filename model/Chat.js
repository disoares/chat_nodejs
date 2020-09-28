const db = require("./db");

const Chat = db.sequelize.define('tab_chat_controls', {
    port: {
        type: db.Sequelize.INTEGER
    },
    available: {
        type: db.Sequelize.INTEGER
    }
});

const ChatHistory = db.sequelize.define('tab_chat_histories', {
    name: {
        type: db.Sequelize.STRING
    },
    chat: {
        type: db.Sequelize.TEXT
    },
    port: {
        type: db.Sequelize.INTEGER
    }
});

/*Chat.sync({force: true});*/

/*ChatHistory.sync({force: true});*/

module.exports = {
    Chat: Chat,
    ChatHistory: ChatHistory
};