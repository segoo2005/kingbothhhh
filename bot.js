 const Discord = require('discord.js');
const client = new Discord.Client();


  
client.on('ready', () => {
  console.log(Logged in {client.user.tag}!);
});


client.on('ready', async() => {
var server = "566377119584878622"; // ايدي السررفر
var channel = "566377324807979089";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , ')
    },305);
})

client.login(process.env.BOT_TOKEN);
