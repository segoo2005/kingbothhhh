const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("566377272366596096")
setInterval(function() {
channel.send(`youtube`);
}, 25)
})
 
 
client.login('BOT_TOKEN');
