const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Repeats what you say.')
        .addStringOption(option =>
            option
                .setName('text')
                .setDescription('The text to be repeated')
                .setRequired(true)
        ),

    async execute(interaction) {
        let text = interaction.options.getString('text');
        interaction.reply(text);
    }
}