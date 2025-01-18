const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('All the commands and what they do.'),

    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('Help')
            .setDescription('Bot help menu')
            .setColor(0x240042)
            .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL() })
            .setTimestamp()
            .addFields(
                {
                    name: 'Commands',
                    value: '--------->',
                    inline: true
                },
                {
                    name: '1',
                    value: 'help: this thing',
                    inline: true
                },
                {
                    name: '2',
                    value: 'hello: says hello to a user',
                    inline: true
                },
                {
                    name: '3',
                    value: 'echo: repeats what you say',
                    inline: true
                },
                {
                    name: '4',
                    value: 'ping: responds with pong',
                    inline: true
                },
                {
                    name: 'FAQs',
                    value: 'There are none, yet... unless you have one, DM it to mimic_vr',
                    inline: false
                },
                {
                    name: 'Suggestions',
                    value: 'DM a suggestion to mimic_vr, he might add it',
                    inline: false
                }
            )

        await interaction.reply({
            embeds: [embed],
            ephemeral: true,
        })
    }
}