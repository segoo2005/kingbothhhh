const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTQxNDAxNDY4ODI2MTU3MDY3.DzjMmw.-hxDJWkpU2X3BKHB_sFsVMDfRT0');

