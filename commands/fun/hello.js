const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hello')
        .setDescription('Replies with "Hello"')
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('The user to say "hello" to.')
                .setRequired(false)
        ),

    async execute(interaction) {
        const user = interaction.options.getUser('user') || interaction.user;
        interaction.reply(`Hello, ${user}`);
    }
}