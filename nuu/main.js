const { CommandHandler } = require('vnftjs')
const client = new CommandHandler()
client.loadCommands('./nuu/commands')
client.loadScripts('./nuu/scripts')
client.login(process.env.plant)
