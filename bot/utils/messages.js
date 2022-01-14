const { errors } = require("../locale/en-US/error.json");

const getRandomUsersFromEmoji = (amount, emoji, message, client, guildID) => {
    return new Promise(async (res, rej) => {
        try {
            if (!emoji) return rej({ code: "5304", message: errors["5304"] });
            const reactions_manager = message.reactions.resolveId(emoji);
        } catch (error) {
            return rej(error);
        }
    })
}

module.exports = {
    getRandomUsersFromEmoji,
}