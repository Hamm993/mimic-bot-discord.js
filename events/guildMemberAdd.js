const Guild = require('../models/guild');

module.exports = {
    name: 'guildMemberAdd',
    async execute(member) {
        if (dbGuild.welcomeRoleId) {
            const welcomeRole = await member.guild.roles.fetch(dbGuild.welcomeRoleId);
            await member.roles.add(welcomeRole)
        }

        const dbGuild = await Guild.findOne({ where: { id: member.guild.id } })
        if (dbGuild.welcomeChannelId) {
            const welcomeChannel = await member.guild.channels.fetch(dbGuild.welcomeChannelId);
            welcomeChannel.send(`${member.user} has entered the mimic_vr discord server!`)
        }
    }
}