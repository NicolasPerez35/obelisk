const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { calcDate } = require("../../utils/dates");
const { getRoles } = require("../../utils/role");
const { errorEmbed } = require("../../utils/embeds");
module.exports = {
    name: 'user-info',
    data: new SlashCommandBuilder()
        .setName('user-info')
        .setDescription('Replies with the user info.')
        .addStringOption(option =>
            option.setName('user')
                .setDescription('The user to get info about.')
                .setRequired(true)
        ),
    async execute(interaction) {
        try {
            const user = interaction.options.getString('user').replace(/[<@!>]/g, '');

            if (!user) return interaction.reply('No user specified.');

            const userInfo = await interaction.client.guilds.cache.get(interaction.guildId).members.fetch(user);

            const roles = getRoles(userInfo.roles.cache);
            const userInfoEmbed = new MessageEmbed()
                .setColor('#cfd143')
                .setAuthor(`User information: ${userInfo.user.username}`)
                .setThumbnail(userInfo.user.avatarURL())
                .addFields(
                    { name: 'User ID', value: userInfo.user.id, inline: true },
                    { name: 'Username', value: `${userInfo.user.username}#${userInfo.user.discriminator}`, inline: true },
                    { name: 'User is bot', value: `${userInfo.user.bot ? 'Yes' : 'No'}`, inline: true },
                    { name: "User joined discord", value: calcDate(userInfo.user.createdAt), inline: false },
                    { name: "User joined server", value: calcDate(userInfo.joinedAt), inline: false },
                    { name: `User roles (${roles.size})`, value: roles.text, inline: false },
                )

            interaction.reply({ embeds: [userInfoEmbed] });
        } catch (error) {
            if (error.code === 50035) {
                interaction.reply({ content: 'Invalid user specified.', ephemeral: true });
            } else {
                interaction.reply('An error occurred.');
            }
            const traceChannel = await interaction.client.guilds.cache.get(process.env.DISCORD_DEVELOPMENT_GUILD).channels.fetch(process.env.DISCORD_TRACING_ERRORS);
            traceChannel.send({ embeds: [errorEmbed(error, interaction)] });
        }

    }
}