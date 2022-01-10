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

module.exports = {
    getChannelTopic,
    getChannelType,
};