const discord = require("discord.js")
const client = new discord.Client()


// Config details
const config = require("./config.json");
var token = config.token;
var guildID = config.guildID;
var categoryID = config.categoryID;
var extraStaffRole = config.useExtraStaffRole;
var supportRoleID = config.supportRoleID;
var onlinemessage = config.onlineMessage;

var statusType = config.status.statusType;
var statusText = config.status.statusText;
var statusOnlineType = config.status.statusOnlineType;



client.login(token)
client.on("ready", async () => {
    console.log(client.user.username + " " + onlinemessage)
        client.user.setPresence({
        game: { 
            name: statusText,
            type: statusType
        },
        status: statusOnlineType
    })

});
client.on("message", async message => {
 
    var existingTicket = false;
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") {
   	
        
        var ticketGuild = client.guilds.cache.get(guildID);
        ticketGuild.channels.cache.forEach(channel => {
                    if (channel.name == message.author.username.toLowerCase() + "-" + message.author.discriminator) {
            existingTicket = true;


            return;
        }
        })
        
        if (!existingTicket) {
       
               var embed = new discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hey, " + message.author.username)
        .setFooter("Your message is recieved! We will handle this as soon as possible! You can always send more messages here to add them to the ticket! Note: You will not get a confirmation");
          message.author.send(embed);
          ticketGuild.channels.create(message.author.username.toLowerCase() + "-" + message.author.discriminator, { type: 'text' }).then(
        (createdChannel) => {
            createdChannel.setTopic(message.author.id);
            createdChannel.setParent(categoryID).then(
                (settedParent) => {

                    settedParent.updateOverwrite(ticketGuild.roles.cache.find(x => x.name === '@everyone'), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });
                    if (useExtraStaffRole) {
                    if (supportRoleID) {
                        settedParent.updateOverwrite(supportRoleID, {
                            CREATE_INSTANT_INVITE: false,
                            READ_MESSAGES: true,
                            SEND_MESSAGES: true,
                            ATTACH_FILES: true,
                            CONNECT: true,
                            ADD_REACTIONS: true,
                            VIEW_CHANNEL: true,
                            READ_MESSAGE_HISTORY: true
                        });
                    }
                    }


                         var embedParent = new discord.MessageEmbed()
                        .setTitle(`Ticket from ${message.author.username}`)
                         .setColor("GREEN")
                        .setDescription(message.content);

                    settedParent.send(embedParent);
                                    }
            ).catch(err => {
                message.channel.send("Something went wrong");
                console.log(err);
            });
        }
    ).catch(err => {
        message.channel.send("Er is iets misgelopen");
              console.log(err);
    });
                    
           
        }else {
            var ticketChannel = ticketGuild.channels.cache.find(channel => channel.name === message.author.username.toLowerCase() + "-" + message.author.discriminator)
            
            ticketChannel.send(`**${message.author.username} has sended:** ${message.content}`)
        }
    };

 
    var messageArray = message.content.split(" ");
    var args = messageArray[1];
    
 	var messageArray2 = message.content.toLowerCase().split(" ");
    var command = messageArray2[0];
    
    if(message.channel.type === "dm") return;
 	
    
   if (message.channel.parentID === categoryID) {

       if (message.content.startsWith(".")) {

           var toSend = message.content.substring(1);
           var reciever = message.guild.members.cache.get(message.channel.topic);
           reciever.send(`**${message.author.username} has sended:** ${toSend}`);
           message.channel.send(`**${message.author.username} has sended:** ${toSend}`);
           message.delete();
           
       }
       
       if (command === '!close') {
           var reciever = message.guild.members.cache.get(message.channel.topic);
           var embed123 = new discord.MessageEmbed()
           .setColor("GREEN")
           .setTitle("Ticket Closed")
           .setTimestamp()
           .setDescription("Your ticket has been closed. Feel free to send us a message again to make a new one if you need help!")
           reciever.send(embed123)
           message.channel.delete()
       }
   }
 

 
});