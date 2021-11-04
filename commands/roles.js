// required dependencies
const Discord = require('discord.js');

module.exports = {
    name: "roles",
    description: "Setup the Roles needed for sync",
    category: "owner",
    slash: "both",
    global: true,
    hidden: true,
    ownerOnly: true,
    permission: [],
    /**
     * 
     * @param {Discord.Client} param0.client  
     */

     run: async ({ guild,client,message }) => {
        guild.roles.create({ name: 'Radiant', color: '#fefeb1', hoist: 'true', mentionable: 'false' });
        guild.roles.create({ name: 'Immortal 3', color: '#be334d', hoist: 'true', mentionable: 'false' });
        guild.roles.create({ name: 'Immortal 2', color: '#be334d', hoist: 'true', mentionable: 'false' });
        guild.roles.create({ name: 'Immortal 1', color: '#be334d', hoist: 'true', mentionable: 'false' });
        guild.roles.create({ name: 'Diamond 3', color: '#c587f4', hoist: 'true', mentionable: 'false' });
        guild.roles.create({ name: 'Diamond 2', color: '#c587f4', hoist: 'true', mentionable: 'false' });
        guild.roles.create({ name: 'Diamond 1', color: '#c587f4', hoist: 'true', mentionable: 'false' });
        guild.roles.create({ name: 'Platinum 3', color: '#52d1df', hoist: 'true', mentionable: 'false' });
        guild.roles.create({ name: 'Platinum 2', color: '#52d1df', hoist: 'true', mentionable: 'false' });
        guild.roles.create({ name: 'Platinum 1', color: '#52d1df', hoist: 'true', mentionable: 'false' });
        guild.roles.create({ name: 'Gold 3', color: '#d98d20', hoist: 'true', mentionable: 'false' });
        guild.roles.create({ name: 'Gold 2', color: '#d98d20', hoist: 'true', mentionable: 'false' });
        guild.roles.create({ name: 'Gold 1', color: '#d98d20', hoist: 'true', mentionable: 'false' });
        guild.roles.create({ name: 'Silver 3', color: '#c6cdcb', hoist: 'true', mentionable: 'false' });
        guild.roles.create({ name: 'Silver 2', color: '#c6cdcb', hoist: 'true', mentionable: 'false' });
        guild.roles.create({ name: 'Silver 1', color: '#c6cdcb', hoist: 'true', mentionable: 'false' });
        guild.roles.create({ name: 'Bronze 3', color: '#865801', hoist: 'true', mentionable: 'false' });
        guild.roles.create({ name: 'Bronze 2', color: '#865801', hoist: 'true', mentionable: 'false' });
        guild.roles.create({ name: 'Bronze 1', color: '#865801', hoist: 'true', mentionable: 'false' });
        guild.roles.create({ name: 'Iron 3', color: '#5e5e5e', hoist: 'true', mentionable: 'false' });
        guild.roles.create({ name: 'Iron 2', color: '#5e5e5e', hoist: 'true', mentionable: 'false' });
        guild.roles.create({ name: 'Iron 1', color: '#5e5e5e', hoist: 'true', mentionable: 'false' });
        guild.roles.create({ name: 'Unranked', color: '#5f9695', hoist: 'true', mentionable: 'false' });

        let embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('ValoRank Sync Setup')
                .setThumbnail('https://cdn.discordapp.com/attachments/847852754047467550/900678550196207646/Vesturo_1.png')
                .addFields(
                    {name: 'Rollen eingerichtet', value: 'Rollen erfolgreich erstellt!\nDu Kannst diese nachricht einfach löschen, alles erledigt' }
                )
                .setTimestamp()
                .setFooter('Made by Studio 5', 'https://cdn.discordapp.com/attachments/847852754047467550/900678550196207646/Vesturo_1.png');

                message.channel.send({ 
                    embeds: [embed]
                });

    }
}