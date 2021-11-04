// required dependencies
const Discord = require('discord.js');

module.exports = {
    name: "embed",
    description: "Setup the Sync embed",
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

     run: async ({ message,client }) => {
        let embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('ValoRank Sync')
                .setThumbnail('https://cdn.discordapp.com/attachments/847852754047467550/900678550196207646/Vesturo_1.png')
                .setDescription('Synchronisiere einfach deinen Valorant Rank um die Passende Rolle zu erhalten!')
                .addFields(
                    {name: 'Synchronisierung', value: 'Klicke einfach auf den button "sync" um deine Profile zu verknüpfen!' },
                    {name: 'wichtig', value: 'Solltest du deinen Discord namen ändern musst du diesen Schritt erneut durchführen!' }
                )
                .setTimestamp()
                .setFooter('Made by Studio 5', 'https://cdn.discordapp.com/attachments/847852754047467550/900678550196207646/Vesturo_1.png');

                message.channel.send({ 
                    embeds: [embed],
                    components: [
                        {
                            type: 1,
                            components: [
                                {
                                    type: 2,
                                    style: 4,
                                    label: "Synchronisieren",
                                    // Our button id, we can use that later to identify,
                                    // that the user has clicked this specific button
                                    custom_id: "start_sync"
                                },
                                {
                                    type: 2,
                                    style: 5,
                                    label: "Bot selbst nutzen",
                                    // Our button id, we can use that later to identify,
                                    // that the user has clicked this specific button
                                    url: "https://github.com/vesturo/ValoRank-bot"
                                }
                            ]
                        }
                    ],
                });
                
    }
}