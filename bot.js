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



const adminprefix = "*";
const developers = ["" , ""];


client.on('ready', () => {
    console.log(`Logged as ${client.user.tag}`)
})

client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(``)
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(``)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(``)
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/osama_gmt");
      message.channel.send(``)
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
      if (!developers.includes(message.author.id)) return;
 
            m.send(args);
        });
    message.delete(); 
    }
    } else {
        return;
    }
 });




client.login("");
