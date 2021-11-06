// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token, guildId, ownerId, hostname, db_name, db_pass, db_user } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const Handler = require('discord-slash-command-handler').Handler;
const mysql = require('mysql');


const connection = mysql.createConnection({ host:hostname, user:db_user, password:db_pass, database:db_name});

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

      connection.changeUser({
        database : "studio5_db9"
      }, function(err) {
        if (err) {
          console.log('error in changing database', err);
          return;
      }
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

    
    
    console.log("starting sync");
    connection.changeUser({
      database : "studio5_db9"
      }, function(err) {
        if (err) {
          console.log('error in changing database', err);
        return;
      }
    });
    let sql = "SELECT * FROM valotrack_sync";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      result.forEach((valorant) => {
        var currenttier = valorant.currenttier;
        switch(currenttier) {
          case 3:
            var role = member.guild.roles.find(role => role.name === "Iron 1");
            console.log("Iron 1");
  
            break;
          case 4:
            var role = member.guild.roles.find(role => role.name === "Iron 2");
            console.log("Iron 2");
            
            break;
          case 5:
            var role = member.guild.roles.find(role => role.name === "Iron 3");
            console.log("Iron 3");
            
            break;
          case 6:
            var role = member.guild.roles.find(role => role.name === "Bronze 1");
            console.log("Iron 1");
            
            break;
          case 7:
            var role = member.guild.roles.find(role => role.name === "Bronze 2");
            console.log("Iron 1");
            
            break;
          case 8:
            var role = member.guild.roles.find(role => role.name === "Bronze 3");
            console.log("Iron 1");
            
            break;
          case 9:
            var role = member.guild.roles.find(role => role.name === "Silver 1");
            console.log("Iron 1");
            
            break;
          case 10:
            var role = member.guild.roles.find(role => role.name === "Silver 2");
            console.log("Iron 1");
            
            break;
          case 11:
            var role = member.guild.roles.find(role => role.name === "Silver 3");
            console.log("Iron 1");
            
            break;
          case 12:
            var role = member.guild.roles.find(role => role.name === "Gold 1");
            console.log("Iron 1");
            
            break;
          case 13:
            var role = member.guild.roles.find(role => role.name === "Gold 2");
            console.log("Iron 1");
            
            break;
          case 14:
            var role = member.guild.roles.find(role => role.name === "Gold 3");
            console.log("Iron 1");
            
            break;
          case 15:
            var role = member.guild.roles.find(role => role.name === "Platinum 1");
            console.log("Iron 1");
            
            break;
          case 16:
            var role = member.guild.roles.find(role => role.name === "Platinum 2");
            console.log("Iron 1");
            
            break;
          case 17:
            var role = member.guild.roles.find(role => role.name === "Platinum 3");
            console.log("Iron 1");
            
            break;
          case 18:
            var role = member.guild.roles.find(role => role.name === "Diamond 1");
            console.log("Iron 1");
            
            break;
          case 19:
            var role = member.guild.roles.find(role => role.name === "Diamond 2");
            console.log("Iron 1");
            
            break;
          case 20:
            var role = member.guild.roles.find(role => role.name === "Diamond 3");
            console.log("Iron 1");
            
            break;
          case 21:
            var role = member.guild.roles.find(role => role.name === "Immortal 1");
            console.log("Iron 1");
            
            break;
          case 22:
            var role = member.guild.roles.find(role => role.name === "Immortal 2");
            console.log("Iron 1");
            
            break;
          case 23:
            var role = member.guild.roles.find(role => role.name === "Immortal 3");
            console.log("Iron 1");
            
            break;
          case 24:
            var role = member.guild.roles.find(role => role.name === "Radiant");
            console.log("Iron 1");
            break;
        };
      });
    });

    

	  console.log('Ready!');
});

client.on("guildCreate", guild => {
  console.log("Joined a new guild: " + guild.name +" | "+ guild.id);
  
  
  var $guildIdjoined = guild.id;
  var sql = "INSERT INTO valotrack_guilds (guildId) VALUES ('" + $guildIdjoined + "')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
})

//removed from a server
client.on("guildDelete", guild => {
  console.log("Left a guild: " + guild.name +" | "+ guild.id);
  connection.changeUser({
    database : "studio5_db9"
  }, function(err) {
    if (err) {
      console.log('error in changing database', err);
      return;
  }
});
  
  var $guildIdjoined = guild.id;
  var sql = "DELETE FROM valotrack_guilds WHERE (guildId) = ('" + $guildIdjoined + "')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record deleted");
  });
})


// Login to Discord with your client's token
client.login(token);