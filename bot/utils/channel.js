const getChannelTopic = (topic) => {
    if (topic) {
        return topic;
    }
    return "No topic set";
};

const getChannelType = (type) => {
    const types = {
        'GUILD_TEXT': 'Text',
        'GUILD_VOICE': 'Voice',
        'GUILD_CATEGORY': 'Category',
    }

    return types[type] || 'Unknown';
}

const getLastChannelMessage = (channelId, client, guildId, message_id) => {
    // Testing /random-user amount:1 message_link:https://discord.com/channels/894086114674098186/929827702263926787/930194455892471818 

    // Got a quick question, link to messages, what's it's structure?
    // it's https://discord.com/channels/<serverid>/<channelid>/<messageid>
    return new Promise(async (res, rej) => {
        try {
            const guild = await client.guilds.fetch(guildId);
            const channel = await guild.channels.fetch(channelId);
            let message = null;
            if (!message_id) {

                const messages = await channel.messages.fetch({ limit: 15 }).then((messages) => {
                    return messages.filter(m => m.type !== 'APPLICATION_COMMAND');
                });
                message = messages.first();

            } else {
                message = await channel.messages.fetch(message_id);

            }
            
            return res(message);

        } catch (error) {
            return rej(error);
        }
    })
}

module.exports = {
    getChannelTopic,
    getChannelType,
    getLastChannelMessage
};