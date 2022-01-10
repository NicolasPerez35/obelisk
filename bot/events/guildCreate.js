const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'guildCreate',
    once: false,
    async execute(guild, client) {
        try {
            const joinEmbed = new MessageEmbed()
                .setColor('#ffeb36')
                .setTitle('Thanks for inviting me!')
                .setURL("http://www.obeliskteam.com.ar/")
                .setAuthor({ name: 'Obelisk Team', iconURL: 'https://cdn.discordapp.com/avatars/929585635352789042/3c6a5deaf9eb954428560b2b168ee88a.webp?size=32', url: "http://www.obeliskteam.com.ar/" })
                .setDescription(`Hi! Obelisk Team thanks you for using our bot, we hope it suits your needs and we hope you enjoy it! If you need help, please contact us in our official server!`)
                .addFields(
                    { name: 'Guild', value: `${guild.name}`, inline: true },
                    { name: 'Members', value: `${guild.memberCount}`, inline: true },
                    { name: 'Owner', value: `<@${guild.ownerId}>`, inline: true },
                )
                .setTimestamp()
                .setFooter('Obelisk Team', 'https://cdn.discordapp.com/avatars/929585635352789042/3c6a5deaf9eb954428560b2b168ee88a.webp?size=32');

            const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setLabel('About us')
                        .setStyle('LINK')
                        .setURL('https://www.obeliskteam.com.ar/'),
                    new MessageButton()
                        .setLabel('Documentation')
                        .setStyle('LINK')
                        .setURL('https://www.obeliskteam.com.ar/'),
                    new MessageButton()
                        .setLabel('Official server')
                        .setStyle('LINK')
                        .setURL('https://discord.gg/QsRG6kDX6f'),
                )
            const channel = guild.channels.cache.filter(chx => chx.type === 'GUILD_TEXT').first();

            channel.send({ embeds: [joinEmbed], components: [row] });

        } catch (error) {
            console.error(`On guildCreate: ${error}`);
            client && client.guilds.cache.find(g => g.id === guild.id)?.leave().catch((err) => console.error(err));
        }

    }
}