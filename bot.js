// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token, guildId, ownerId, hostname, db_name, db_pass, db_user } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const Handler = require('discord-slash-command-handler').Handler;
const mysql = require('mysql');


const connection = mysql.createConnection({ host:hostname, user:db_user, password:db_pass});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('MYSQL-ID ' + connection.threadId);
});


// When the client is ready, run this code (only once)
client.once('ready', () => {
    client.user.setActivity("euren Rang", {
        type: "WATCHING"
      });

      const handler = new Handler(client, {
        commandFolder:"/commands",
        commandType: "file" || "folder",
        eventFolder:"/events",
        slashGuilds:[guildId],
        allSlash:true,
        owners:[ownerId], 
        handleSlash: true,
        handleNormal: false,
        autoDefer: false,
        permissionReply: "You don't have enough permissions to use this command", 
        timeoutMessage: "You are on a timeout",
        errorReply: "Unable to run this command due to errors",
        notOwnerReply: "Only bot owner's can use this command",
    });

	console.log('Ready!');
});


// Login to Discord with your client's token
client.login(token);