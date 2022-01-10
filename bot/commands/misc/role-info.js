const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { getPermissions } = require("../../utils/role");
module.exports = {
    name: 'role-info',
    data: new SlashCommandBuilder()
        .setName('role-info')
        .setDescription('Replies with the role info.')
        .addStringOption(option =>
            option.setName('role')
                .setDescription('The role to get info from.')
                .setRequired(true)
        ),
    async execute(interaction) {
        const role = interaction.options.getString('role').replace(/[<@&>]/g, '');
        if (!role) return interaction.reply(`I'm sorry I didn't understand the role. Please specify the role with @ or it's proper id.`);
        const roleInfo = await interaction.client.guilds.cache.get(interaction.guildId).roles.cache.find(r => r.id === role || r.name === role);
        const roleInfoEmbed = new MessageEmbed()
            .setColor('#cfd143')
            .setTitle(`Role information`)
            .addFields(
                { name: 'Role ID', value: roleInfo.id, inline: true },
                { name: 'Role name', value: roleInfo.name, inline: true },
                { name: 'Role mention', value: "`<@&"+ roleInfo.id +">`", inline: true },
                { name: 'Role color', value: `#${roleInfo.color.toString(16)}`, inline: true },
                { name: "Role members", value: `${roleInfo.members.size}`, inline: true },
                { name: "Role created at", value: roleInfo.createdAt.toLocaleString(), inline: true },
                { name: "Role position (from top)", value: roleInfo.position.toString(), inline: true },
                { name: "Role hoist", value: roleInfo.hoist ? 'Yes' : 'No', inline: true },
                { name: "Role mentionable", value: roleInfo.mentionable ? 'Yes' : 'No', inline: true },
                { name: "Role permissions", value: getPermissions(roleInfo.permissions.toArray()), inline: true }
            )
            .setTimestamp()
            .setFooter(`Requested by ${interaction.user.username}#${interaction.user.discriminator}`);

        interaction.reply({ embeds: [roleInfoEmbed] });
    }
}