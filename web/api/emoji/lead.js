const pg = require('../../../db')

const { Site } = require('vnft-tools')
const all = new Site('/emoji/lead/:page')

all.get = async (req, res) => {
  let query = `SELECT * FROM EMOJIS2 ORDER BY POINTS DESC OFFSET $(offset) LIMIT $(limit)`
  let options = {
    offset: Number(req.params.page) * 100,
    limit: 100,
  }
  res.json(await pg.query(query, options))
}

module.exports = all
