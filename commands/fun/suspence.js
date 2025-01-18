const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('suspence')
        .setDescription('How do you keep an idiot in suspence?'),

        async execute(interaction) {
            await interaction.deferReply({ephemeral: true});

            setInterval(() => {
                interaction.editReply({content: 'I just kept you in suspence, hehe'});
            }, 3000);
        }
}