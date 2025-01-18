const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');
const Guild = require('../../models/guild');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('set-welcome-role')
        .setDescription('Set the welcome role for this guild (server) that will be given to new members')
        .addRoleOption(option =>
            option
                .setName('role')
                .setDescription('Role to give new members upon joining')
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

        async execute(interaction) {
            await interaction.deferReply({ephemeral: true});
            const { options, member } = interaction;

            if (interaction.guild.ownerId !== member.id) return interaction.reply('Only the server owner can use this command');

            const role = await options.getRole('role');
            const [ guild, created ] = await Guild.findOrCreate({ where: { id: interaction.guild.id }})

            if (!role) await guild.update({ welcomeRoleId: null});
            else guild.update({ welcomeRoleId: role.id });

            if (!role) return interaction.editReply(`Disabled the welcome role system`);

            const embed = new EmbedBuilder()
                .setTitle(`Set the channel for welcome messages to`)
                .setDescription(`${role}`)
                .setColor(0x240042);
            
            interaction.editReply({embeds: [embed]});
        }
}