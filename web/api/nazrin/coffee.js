const nazrin = require('../../../nazrin')

const { Site } = require('vnft-tools')
const site = new Site('/nazrin/coffee')

site.get = async (req, res) => {
  let channels = nazrin.channels.find(c => c.type == 'text' && c.guild.id == '254735952969334801')
  console.log(channels)
  res.json('ok')
}

module.exports = site
