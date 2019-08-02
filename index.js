require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content === '!ping') {
    msg.reply('Pong!')
  }
})

client.on('guildMemberAdd', member => {
  member.send(
    `Welcome on the server! Please be aware that we won't tolerate troll, spam or harassment. Have fun 😀`
  )
})

client.on('kick', message => {
  if (message.content.startsWith('!kick')) {
    const member = message.mentions.members.first()

    if (!member) {
      return message.reply(
        `Who are you trying to kick? You must mention a user.`
      )
    }

    if (!member.kickable) {
      return message.reply(`I can't kick this user. Sorry!`)
    }

    return member
      .kick()
      .then(() => message.reply(`${member.user.tag} was kicked.`))
      .catch(error => message.reply(`Sorry, an error occured.`))
  }
})

client.on('message', message=> {
	if (message.content.startsWith('!ban')) {
		const member = message.mentions.members.first()

    if (!member) {
      return message.reply(
        `Who are you trying to ban? You must mention a user.`
      )
    }

    if (!member.banable) {
      return message.reply(`I can't ban this user. Sorry!`)
    }

    return member
      .ban()
      .then(() => message.reply(`${member.user.tag} was banned.`))
      .catch(error => message.reply(`Sorry, an error occured.`))
  }
})
client.login(process.env.BOT_TOKEN)