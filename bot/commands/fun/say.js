const { SlashCommandBuilder } = require("@discordjs/builders");
const { hasPermission } = require("../../utils/permissions");
module.exports = {
    name: "say",
    data: new SlashCommandBuilder()
        .setName("say")
        .setDescription("Make the bot say something")
        .addStringOption(option =>
            option.setName("message")
                .setDescription("The message to send")
                .setRequired(true)
        )
        .addChannelOption(option =>
            option.setName("channel")
                .setDescription("The channel to send the message to")
                .setRequired(false)
        ),
    async execute(interaction) {
        if (!hasPermission(interaction, 'MANAGE_MESSAGES')) return interaction.reply("You don't have permission to use this command!");
        const channel = interaction.options.getChannel('channel'), message = interaction.options.getString('message');
        let channelToSendTo;
        const textToSend = `
            ${message}\n\nFrom: <@${interaction.user.id}>
        `
        if (channel && channel.type !== "GUILD_TEXT") return interaction.reply({ content: "You only can send messages to text channels!", ephemeral: true });
        
        if (!channel) channelToSendTo = interaction.channel;
        else channelToSendTo = channel;

        interaction.reply({ content: `Sending message...`, ephemeral: true });

        channelToSendTo.send({ content: textToSend });
    }
}