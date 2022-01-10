module.exports = {
    name: 'interactionCreate',
    once: false,
    async execute(interaction, client) {
        if (!interaction.isCommand()) return;

        const command = interaction.client.commands.get(interaction.commandName);

        if (!command) return;

        try {
            await command.execute(interaction, client);
        } catch (error) {
            console.log(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true, deleteAfter: 5000 });
        }
    }
}