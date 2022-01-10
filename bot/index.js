const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { Client, Intents, Collection } = require('discord.js');
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();
let myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.GUILD_PRESENCES);
const client = new Client({ intents: myIntents });

client.commands = new Collection();

const clientId = '929585635352789042', guildId = '894086114674098186';

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
    console.log(`From ${folder} reading files...`);
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    if (!commandFiles.length) {
        console.log(`   No files found in ${folder}`);
        continue;
    }
    for (const file of commandFiles) {
        console.log(`   Loading ${file}...`);
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');
        if (process.env.NODE_ENV === 'production') {
            await rest.put(
                Routes.applicationGuildCommands(clientId),
                { body: client.commands.map(command => command.data) }
            )
        } else {
            await rest.put(
                Routes.applicationGuildCommands(clientId, guildId),
                { body: client.commands.map(command => command.data) }
            )
        }

        console.log('Finished refreshing application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();

console.log(`From events/ reading files...`)
for (const file of eventFiles) {
    console.log(`   Loading event ${file}`);
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
    } else {
        client.on(event.name, (...args) => event.execute(...args, client));
    }
}

client.login(process.env.DISCORD_TOKEN);