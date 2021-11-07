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
                .setDescription('Synchronise your Valorant rank to discord with ease!')
                .addFields(
                    {name: 'Synchronising', value: 'click on the button below to setup your personal sync' },
                    {name: 'important', value: 'you have to resync if you change your Discord or Valorant name!' }
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
                                    style: 5,
                                    label: "Synchronise Account",
                                    // Our button id, we can use that later to identify,
                                    // that the user has clicked this specific button
                                    url: "https://auth.valotrack.com"
                                }
                            ]
                        }
                    ],
                });
                
    }
}