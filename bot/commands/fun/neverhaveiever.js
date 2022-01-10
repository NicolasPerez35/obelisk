const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
    name: "neverhaveiever",
    data: new SlashCommandBuilder()
        .setName("neverhaveiever")
        .setDescription("Replies with a never have i ever question"),
    async execute(interaction) {
        try {
            const neverHaveIEverQuestions = require(`../../locale/${process.env.LOCALE}/never_have_i_ever.json`);
            const randomQuestion = neverHaveIEverQuestions.questions[Math.floor(Math.random() * neverHaveIEverQuestions.questions.length)].question;

            interaction.reply(`${neverHaveIEverQuestions.name} ${randomQuestion}`);
        } catch (error) {

        }
    }

}