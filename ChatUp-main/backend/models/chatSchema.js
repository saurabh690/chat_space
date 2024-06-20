const mongoose = require('mongoose')

const ChatSchema = mongoose.Schema({
    chatName: {
        type: String,
        trim: true
    },

    isGroupChat: {
        type: Boolean,
        default: false
    },

    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
})

const Chat = mongoose.model("Chat", ChatSchema);

module.exports = Chat;