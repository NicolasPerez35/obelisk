const { SlashCommandBuilder } = require("@discordjs/builders");
const { getLastChannelMessage } = require("../../utils/channel");
const { getRandomUsersFromEmoji } = require("../../utils/messages");
module.exports = {
    name: 'random-user',
    disabled: true,
    data: new SlashCommandBuilder()
        .setName('random-user')
        .setDescription('Replies with a random user.')
        .addNumberOption(option =>
            option.setName('amount')
                .setDescription('The amount of users to get.')
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('emoji')
                .setDescription('The emoji to filter the winners.')
                .setRequired(false)
        )
        .addStringOption(option =>
            option.setName('message_link')
                .setDescription('The message link to filter the winners.')
                .setRequired(false)
        ),
    async execute(interaction) {
        try {
            let amount = interaction.options.getNumber('amount'), emoji = interaction.options.getString('emoji')?.replace(/[<>#]/g, ''), message_link = interaction.options.getString('message_link');
    
            if (amount < 1) return interaction.reply({ content: 'Please specify a valid amount.', ephemeral: true });
            else if (amount > 20) return interaction.reply({ content: `The amount of users can't be greater than 20.`, ephemeral: true });
    
            message_link = message_link?.split('/');
            
            console.log(emoji);
            const channel = message_link?.[message_link.length - 2], message_id = message_link?.[message_link.length - 1];
            const last_channel_message = await getLastChannelMessage(channel || interaction.channelId, interaction.client, interaction.guildId, message_id);
            const random_users = await getRandomUsersFromEmoji(amount, emoji, last_channel_message, interaction.client, interaction.guildId);
    
            interaction.reply('UPSIE DUPSIE');
            
        } catch (error) {
            
        }
    }
}