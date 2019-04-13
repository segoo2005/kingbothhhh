const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("566377324807979089")
setInterval(function() {
channel.send(`بسم الله الرحمن الرحيم وهنبدا الليله`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
