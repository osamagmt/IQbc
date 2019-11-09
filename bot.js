const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://tttt.glitch.me/`);
}, 280000);


const Discord = require("discord.js");
const client = new Discord.Client();
const ms = require("ms");
const moment = require("moment");
const prefix = "#"



client.on('message', message => {

          if (!message.content.startsWith(prefix)) return;
          var args = message.content.split(' ').slice(1);
          var argresult = args.join(' ');
          if (message.author.id == 470451682417967116) return;


        if (message.content.startsWith(prefix + 'playing')) {
        if (message.author.id !== '410421617869455370') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
        client.user.setGame(argresult);
            message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
        } else


        if (message.content.startsWith(prefix + 'streem')) {
        if (message.author.id !== '410421617869455370') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
        client.user.setGame(argresult, "http://twitch.tv/osamagmt");
            message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
        } else

        if (message.content.startsWith(prefix + 'setname')) {
        if (message.author.id !== '410421617869455370') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
          client.user.setUsername(argresult).then
              message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
          return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
        } else

        if (message.content.startsWith(prefix + 'setavatar')) {
        if (message.author.id !== '410421617869455370') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
        client.user.setAvatar(argresult);
            message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
        } else


        if (message.content.startsWith(prefix + 'watching')) {
        if (message.author.id !== '410421617869455370') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
            client.user.setActivity(argresult, {type : 'watching'});
         message.channel.sendMessage(`**${argresult}** : تم تغيير الووتشينق الى`)
        }

         });

 
client.on("message", async message => {
if(message.channel.type === "dm") return;
var args = message.content.split(' ').slice(1);
    if (message.author.id === client.user.id) return;
    if (message.guild) {
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send(`**${prefix}bc <message>**`);
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
 
            m.send(args);
        });
    message.delete(); 
    }
    } else {
        return;
    }
 });




client.login("");
