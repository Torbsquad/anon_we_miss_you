const Canvas = require('canvas')
const Discord = require('discord.js')
const { Command } = require('vnftjs')

const command = new Command()
command.name = 'moustache'

command.funct = async (bot, message, args) => {
  const canvas = Canvas.createCanvas(100, 100)
  const ctx = canvas.getContext('2d')

  const userImg = await Canvas.loadImage(message.author.avatarURL)
  const moustache = await Canvas.loadImage('./moustache.png')

  ctx.drawImage(userImg, 0, 0, canvas.width, canvas.height)
  ctx.drawImage(moustache, 0, 0, canvas.width, canvas.height)

  const attachment = new Discord.Attachment(canvas.toBuffer(), `user ${message.author.username}.png`)
  message.channel.send(``, attachment)
}

module.exports = command
