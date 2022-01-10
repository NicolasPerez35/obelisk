const { MessageEmbed } = require('discord.js');

const errorEmbed = (error, interaction) => {
    const embed = new MessageEmbed()
        .setColor('#e32727')
        .setAuthor(interaction.guild.name, interaction.guild.iconURL())
        .setTitle(`Error: ${error.name}!`)
        .addFields(
            { name: 'Method', value: `${error.method}`, inline: true },
            { name: 'Status', value: `${error.httpStatus}`, inline: true },
            { name: 'Path', value: `${error.path}`, inline: false },
            { name: 'Error', value: `${error.message}`, inline: false }
        )
        .setFooter(`Error code: ${error.code}`)
        .setTimestamp();
    return embed;
};

module.exports = {
    errorEmbed,
}