const { Client, GatewayIntentBits } = require('discord.js')

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
})

const BOT_TOCKEN =
  'MTE1NjkzMzIwNTYyNzI0NDY1NA.GAlLSK.TGaKSRX1U2YSDFQoS9drSAtApJTVtUppHnQLbc'

client.login(BOT_TOCKEN)

client.once('ready', () => {
  console.log('bot start')
})

client.on('messageCreate', message => {
  if (message.content.toLowerCase() === 'hi') {
    message.reply('Hi to you too!')
  }
})
