const dotenv = require('dotenv');
dotenv.config()

const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.MessageContent
    ],
});

client.login(process.env.DISCORD_TOKEN);

client.on("messageCreate", async (message) => {
    console.log(message.content)

    if (!message?.author.bot) {
        message.reply(`Echo ${message.content}`)
    }
});