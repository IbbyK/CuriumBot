const Discord = require('discord.js');
const client = new Discord.Client();
client.on('message', message => {
    if (message.content === '$ip') {
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
client.on('message', message => {
    if (message.content === 'Fuck') {
        message.delete(1); 
    	message.reply("**No swearing please**"+y.mention());
  	}
});
client.on('message', message => {
    if (message.content === 'Shit') {
        message.delete(1); 
    	message.reply("**No swearing please**"+y.mention());
  	}
});
client.on('message', message => {
    if (message.content === 'Sh*t') {
        message.delete(1); 
    	message.reply("**No swearing please**"+y.mention());
  	}
});
client.on('message', message => {
    if (message.content === 'S**t') {
        message.delete(1); 
    	message.reply("**No swearing please**"+y.mention());
  	}
});
client.on('message', message => {
    if (message.content === 'F*ck') {
        message.delete(1); 
    	message.reply("**No swearing please**"+y.mention());
  	}
});
client.on('message', message => {
    if (message.content === 'Your mum has gay XD') {
        message.delete(1); 
    	message.reply("**No need to be rude**"+y.mention()+"Btw your mum is the one that has gay");
  	}
});
c.on('serverNewMember',(x,y)=>{
    if(x === c.servers.get('id',"SERVERID"))
        c.sendMessage(x.channels.get('name','Welcome'),"Welcome to the my discord server"+y.mention()+"!")
})
client.on('message', message => {
    if (message.content === '$youtubers') {
    	message.reply("**__List of youtubers__** \n **1.**Nico_the_pro \n**2.**Stazza);
  	}
});
client.login(process.env.BOT_TOKEN);
