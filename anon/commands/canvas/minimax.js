const loadCanvasByImage = require('./helperFunctions/loadCanvasByImage')
const applyFilterToImageData = require('./helperFunctions/applyFilterToImageData')
const getPixel = require('./helperFunctions/getPixel')
const getIndex = require('./helperFunctions/getIndex')

const Discord = require('discord.js')
const { Command } = require('vnftjs')

const command = new Command()
command.name = 'minimax'

command.funct = async (bot, message, args) => {
  const canvas = await loadCanvasByImage(args || message.author.avatarURL)
  applyFilterToImageData(canvas, filter)

  const attachment = new Discord.Attachment(canvas.toBuffer(), `user ${message.author.username}.png`)
  message.channel.send(``, attachment)
}

function filter(cxd) {
  let subPixelCount = Object.keys(cxd.data).length
  for (let y = 0; y < cxd.height; y += 2) {
    for (let x = 0; x < cxd.height; x += 2) {
      var mr = 0
      var mg = 0
      var mb = 0
      for (let sy = 0; sy < 2; sy++) {
        for (let sx = 0; sx < 2; sx++) {
          let i = getIndex(cxd, x + sx, y + sy) * 4
          let r = cxd.data[i]
          if (mr < r) mr = r
          let g = cxd.data[i + 1]
          if (mg < g) mg = g
          let b = cxd.data[i + 2]
          if (mb < b) mb = b
        }
      }
      for (let sy = 0; sy < 2; sy++) {
        for (let sx = 0; sx < 2; sx++) {
          let i = getIndex(cxd, x + sx, y + sy) * 4
          cxd.data[i] = mr
          cxd.data[i + 1] = mg
          cxd.data[i + 2] = mb
        }
      }
    }
  }
  return cxd
}

module.exports = command
