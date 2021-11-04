    // required dependencies
const Discord = require('discord.js');


module.exports = {
    name: "stats",
    description: "some stats",
    category: "general",
    slash: "both",
    global: true,
    hidden: false,
    ownerOnly: false,
    permission: [],
    /**
     * 
     * @param {Discord.Client} param0.client  
     */

    run: async ({ guild,client,message }) => {
        const promises = [
            client.shard.fetchClientValues('guilds.cache.size'),
            client.shard.broadcastEval(c => c.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)),
        ];
        return Promise.all(promises)
            .then(results => {
                const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
                const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0);
                const shardInfo = guild.shardId;
                const totalShards = client.shard.count;
                let embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('ValoRank Sync Stats')
                .setThumbnail('https://cdn.discordapp.com/attachments/847852754047467550/900678550196207646/Vesturo_1.png')
                .setDescription('Synchronisiere einfach deinen Valorant Rank um die Passende Rolle zu erhalten!')
                .addFields(
                    {name: 'Current Shard', value: `Shard: ${shardInfo}` },
                    {name: 'Total Shards', value: `Shard: ${totalShards}` },
                    {name: 'Total Servers', value: `Server count: ${totalGuilds}` },
                    {name: 'All Guild Members', value: `Member count: ${totalMembers}` }
                )
                .setTimestamp()
                .setFooter('Made by Studio 5', 'https://cdn.discordapp.com/attachments/847852754047467550/900678550196207646/Vesturo_1.png');

                message.channel.send({ 
                    embeds: [embed]
                });
            })
            .catch(console.error);
            
    }
}