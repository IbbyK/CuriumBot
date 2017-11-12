const Discord = require('discord.js');
const client = new Discord.Client();
bot.OWNERID = '203878704718413824';
bot.PREFIX = '$';
bot.TOKEN = 'TOKEN HIDDEN TO PUBLIC'; // hidden to the public eye
client.on('message', message => {
    if (message.content === 'ip') {
    	message.reply("The ip is play.curiummc.net");
  	}
});
client.on('message', message => {
    if (message.content === '@CuriumMC tell a joke') {
    	message.reply("The only joke here is you XD");
  	}
});
client.on('message', message => {
    if (message.content === '@CuriumMC tell a joke') {
    	message.reply("The only joke here is you XD");
  	}
});
var blwords = {"shit", "fuck", "cunt", "wank", "pussy", "bastard",
               "whore", "faggot", "fggt", "fk", "pssy", "pu$$y", "fag",
               "arse", "asshole", "retard"};
client.on('message', message => {
    var hasSwears = false;
    var msglower = message.content.toLowerCase();
    for(var word in blwords){
        if(msglower.includes(word)){
            hasSwears = true;
        };
    };
    if(hasSwears){
        message.delete(1);
        message.reply("**No swearing please**");
    };
});
c.on('serverNewMember',(x,y)=>{
    if(x === c.servers.get('id',"SERVERID"))
        c.sendMessage(x.channels.get('name','Welcome'),"Welcome to the my discord server"+y.mention()+"!")
})
client.on('message', message => {
    if (message.content === '$youtubers') {
    	message.reply("**__List of youtubers__** \n **1.**Nico_the_pro \n**2.**Stazza");
  	}
});
bot.login(bot.TOKEN);
