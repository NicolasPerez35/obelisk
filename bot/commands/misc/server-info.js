const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { emojis } = require('../../constants/emojis');
module.exports = {
    name: 'server-info',
    data: new SlashCommandBuilder()
        .setName('server-info')
        .setDescription('Replies with the server info.'),
    async execute(interaction) {
        const serverEmbed = new MessageEmbed()
            .setColor('#cfd143')
            .setAuthor({ name: interaction.guild.name })
            .setThumbnail(interaction.guild.iconURL())
            .addFields(
                { name: 'Server ID', value: interaction.guild.id, inline: true },
                { name: "Server Owner", value: `<@${interaction.guild.ownerId}>`, inline: true },
                { name: "Server members", value: `${emojis.ONLINE} ${interaction.guild.members.cache.filter(m => m.presence.status !== 'offline').size} online | ${emojis.OFFLINE} ${interaction.guild.members.cache.filter(m => m.presence.status === 'offline').size} offline`, inline: false },
                { name: "Server channels", value: `${emojis.TEXT} ${interaction.guild.channels.cache.filter(c => c.type === 'text').size} text | ${emojis.VOICE} ${interaction.guild.channels.cache.filter(c => c.type === 'voice').size} voice`, inline: false },
                { name: "Server Roles", value: `${interaction.guild.roles.cache.size} roles`, inline: true },
                { name: "Server Emojis", value: `${interaction.guild.emojis.cache.size} emojis`, inline: true },
                { name: "Server Ban Count", value: `${emojis.HAMMER} ${interaction.guild.bans.cache.size}`, inline: false },
            )
            .setFooter(`Created: ${interaction.guild.createdAt.toLocaleString()}`);

        interaction.reply({ embeds: [serverEmbed] })

    }
}