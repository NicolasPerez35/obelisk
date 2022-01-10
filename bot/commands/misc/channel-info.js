const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { getChannelType, getChannelTopic } = require('../../utils/channel');
module.exports = {
    name: 'channel-info',
    data: new SlashCommandBuilder()
        .setName('channel-info')
        .setDescription('Replies with the channel info.')
        .addStringOption(option =>
            option.setName('channel')
                .setDescription('The channel to get info from.')
                .setRequired(true)
        ),
    async execute(interaction) {
        const channel = interaction.options.getString('channel').replace(/^<#/, '').replace(/>$/, '');
        if (!channel) return interaction.reply(`I'm sorry I didn't understand the channel. Please specify the channel with # or it's proper id.`);

        const channelInfo = await interaction.channel.client.channels.fetch(channel);
        const channelInfoEmbed = new MessageEmbed()
            .setColor('#cfd143')
            .setTitle(`Channel information`)
            .setAuthor({ name: channelInfo.guild.name, iconURL: channelInfo.guild.iconURL() })
            .addFields(
                { name: 'Channel ID', value: channelInfo.id, inline: true },
                { name: "Channel Name", value: channelInfo.name, inline: true },
                { name: "NSFW", value: channelInfo.nsfw ? 'Yes' : 'No', inline: true },
                { name: "Channel Type", value: getChannelType(channelInfo.type), inline: true },
                { name: "Channel Topic", value: getChannelTopic(channelInfo.topic), inline: true },
                { name: "Channel Mention", value: "`<#" + channelInfo.id + ">`", inline: true },
            )
            .setTimestamp()
            .setFooter(`Requested by ${interaction.user.username}#${interaction.user.discriminator}`);
        interaction.reply({ embeds: [channelInfoEmbed] });
    }
}