const Discord = require("discord.js")
var ls = require('lodestonejs')
var random_number = '16466788'
var bot = ""
module.exports = main

async function main(b){
  bot = b
  setInterval(function(){
    bot.channels.filter(c=>c.name=="👀").forEach(stalk)
  },5*60*1000);
}

async function stalk(channel){
  var richtext = new Discord.RichEmbed();
  var content = []
  var dinge = ["id","title","world","race","gender","clan"]

  ls(random_number, function (err, data) {
    richtext.setColor("b6dd8c")
    richtext.setThumbnail(data.avatar)
    richtext.setImage(data.portrait)
    for( var ding of dinge ){
      content.push(`**${ding}**: ${data[ding]||"keins lol"}`)
    }
    var result = content.join("\n")
    if(channel.topic != result){
      channel.setTopic(result)
      richtext.addField(data.name,result)
      channel.send('@everyone',{embed:richtext})
    }
  })
}
