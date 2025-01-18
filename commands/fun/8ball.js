const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const responses = [
    "It is certain.",
    "Without a doubt.",
    "You may rely on it.",
    "Yes, definitely.",
    "It is decidedly so.",
    "As I see it, yes.",
    "Most likely.",
    "Yes.",
    "Outlook good.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Better not tell you now.",
    "Ask again later.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "Outlook not so good.",
    "My sources say no.",
    "Very doubtful.",
    "My reply is no.",
    "No.",
    "Definitely not.",
    "No way.",
    "I highly doubt it.",
    "Absolutely not."
]

module.exports = {
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('Works as a Magic 8 Ball')
        .addStringOption(option =>
            option
                .setName('question')
                .setDescription('Question for the ball of doom?')
                .setMaxLength(250)
        )
        .addBooleanOption(option =>
            option
                .setName('hidden')
                .setDescription('Hides your message')
        ),

        async execute(interaction) {
            const { options } = await interaction;
            const ephemeral = await options.getBoolean('hidden');
            let random = Math.floor(Math.random() * responses.length - 0.001);

            let embed = new EmbedBuilder()
                .setTitle('Magic 8 Ball')
                .setDescription('The 8 balls choice...')
                .setColor(0x240042)
                .addFields(
                    {
                        name: 'Question:',
                        value: `${options.getString('question')}`,
                        inline: false
                    },
                    {
                        name: 'Answer:',
                        value: `${responses[random]}`,
                        inline: false
                    }
                )

            if (ephemeral) {
                interaction.reply({embeds: [embed], ephemeral: true});
            } else {
                interaction.reply({embeds: [embed], ephemeral: false});
            }
        }
}