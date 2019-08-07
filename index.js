//=-=-=-=-=-=-=-= Changelog =-=-=-=-=-=-=-=
//v23 - removed a line that crashed the .js and added changelog
//v24 - added &bitrate
//v25 - added &neil and &christopher
//v26 - added &qualitybot and &qualitybotv2
//v27 - updated &helps
//v28 - removed &helps
//v29 - added &kurwa
//v30 - changed prefix to &
//v31 - just testing
//v32 - changed &ping to actual ping command and removed test
//v33 - fixed &ping 
//v34 - changed join message
//v35 - added real &helpme
//v36 - huge &helpme overhall
//v37 - forgot to save v36...
//v38 - more h
//v39 - less h
//v40 - added the classic &helpme back until i get embed perms.
//v41 - didnt update v40 changelog...
//v42 - &helpme spams every command and breaks everything. Removed.
//v43 - added ms to &ping and removed some unnessasary lines in &helpme.
//v44 - added &creeper.							aw man
//v45 - fixed some grammar in &creeper and added it to &helpme
require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client()
const helpembed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Need some help with commands?')
	.setAuthor('QualityBot V2 Help Menu', 'https://imgur.com/fiOcMRg.png')
	.setThumbnail('https://imgur.com/fiOcMRg.png')
	.addField('&ping', 'Check bot ping.', true)
	.addField('&kick [@someone]', 'Kick the mentioned person', true)
	.addField('&ban [@someone]', 'Ban the mentioned person', true)
	.addField('&h', 'h', true)
	.addField('&help', 'Help', true)
	.addField('&praise', 'PRAISE', true)
	.addField('&bitrate', 'owo bitrate-san uwu', true)
	.addField('&neil', 'neil neil neil', true)
	.addField('&christopher', 'christopher op', true)
	.addField('&qualitybot', 'quality content', true)
	.addField('&qualitybotv2', 'unoriginal content', true)
	.addField('&kurwa', '**KURWA**', true)
	.addField('&creeper', 'aw man', true)
	.setImage('https://imgur.com/fiOcMRg.png')
	.setTimestamp()
	.setFooter('~Made by @JezzaR#6483~', 'https://imgur.com/fiOcMRg.png');
var h = 0

client.on('ready', () => {
  console.log(`Logged in as QualityBot V2#0474!`)
  client.user.setActivity('for commands. &helpme', { type: 'WATCHING' });   
})

client.on("message", message => { // EventEmitter
	if(message.content == "&ping"){ // Check if message is "!ping"
			message.channel.send("Pinging ...") // Placeholder for pinging ... 
			.then((msg) => { // Resolve promise
				msg.edit("Ping: " + (Date.now() - msg.createdTimestamp + "ms")) // Edits message with current timestamp minus timestamp of message
			});
		}
})

client.on('guildMemberAdd', member => {
  member.send(
    `welcome pls enjoy pure quality content`
  )
})

client.on('message', message => {
  if (message.content.startsWith('&kick')) {
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
      .then(() => message.reply(`&{member.user.tag} was kicked.`))
      .catch(error => message.reply(`Sorry, an error occured.`))
  }
})

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith('&ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
         */
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          // We let the message author know we were able to ban the person
          message.reply(`Successfully banned &{user.tag}`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to ban the member,
          // either due to missing permissions or role hierarchy
          message.reply('I was unable to ban the member');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('That user isn\'t in this guild!');
      }
    } else {
    // Otherwise, if no user was mentioned
      message.reply('You didn\'t mention the user to ban!');
    }
  }
});

client.on('message', msg => {
  if (msg.content === '&h') {
		msg.channel.send('h')
  }
})

client.on('message', msg => {
  if (msg.content === '&help') {
		msg.channel.send('you are beyond help')
  }
})

client.on('message', msg => {
  if (msg.content === '&praise') {
		msg.channel.send('PRAISE LORD AND SAVIOUR @QualityBot V2#0474')
		msg.channel.send('PRAISE THE ORB')
		msg.channel.send('PRAISE NEIL')
		msg.channel.send('PRAISE CHRISTOPHER');
  }
})

client.on('message', msg => {
  if (msg.content === '&bitrate') {
		msg.channel.send('GIVE ME ALL YOUR JUICY DATA')
  }
})

client.on('message', msg => {
  if (msg.content === '&neil') {
		msg.channel.send('may neil praise you')
  }
})

client.on('message', msg => {
  if (msg.content === '&christopher') {
		msg.channel.send('christopher is love christopher is life')
  }
})

client.on('message', msg => {
  if (msg.content === '&qualitybotv2') {
		msg.channel.send('yes thats me')
  }
})

client.on('message', msg => {
  if (msg.content === '&qualitybot') {
		msg.channel.send('no thats not me thats the original you should know this')
  }
})

client.on('message', msg => {
  if (msg.content === '&kurwa') {
		msg.channel.send('**FRICK**')
  }
})

client.on('message', msg => {
	if (msg.content === '&helpme') {
		//msg.channel.send(helpembed);
	}
})

client.on('message', msg => {
	if (msg.content === '&creeper') {
		msg.channel.send("Aw man")
		msg.channel.send("So we back in the mine")
		msg.channel.send("got our pick axe swinging side to side")
		msg.channel.send("Side-side to side")
		msg.channel.send("This task a grueling one")
		msg.channel.send("hope to find some diamonds tonight")
		msg.channel.send("night night")
		msg.channel.send("diamonds tonight")
		msg.channel.send("heads up")
		msg.channel.send("You hear a sound")
		msg.channel.send("turn around and look up")
		msg.channel.send("total shock fills your body")
		msg.channel.send("oh no its you again")
		msg.channel.send("i can never forger those eyes eyes eyes")
		msg.channel.send("eyes eyes eyes")
		msg.channel.send("cause baby tonight")
		msg.channel.send("the creepers tryna steal all our stuff again")
		msg.channel.send("cause baby tonight")
		msg.channel.send("your grab your pick shovel and bolt again")
		msg.channel.send("and run run until its done done")
		msg.channel.send("until the sun comes up in the morn")
		msg.channel.send("cause baby tonight")
		msg.channel.send("the creepers tryna steal all our stuff again")
		msg.channel.send("just when you think youre safe")
		msg.channel.send("overhear some hissing from right behind")
		msg.channel.send("right right behind")
		msg.channel.send("thats a nice life you have")
		msg.channel.send("shame its gotta end at this time time time")
		msg.channel.send("time ti time time")
		msg.channel.send("blows up")
		msg.channel.send("then your health bar drops and you could use a one up")
		msg.channel.send("get inside dont be tardy") //i cant believe they use the word tardy
		msg.channel.send("so now youre stuck in there")
		msg.channel.send("half a heart is left but dont die die die")
		msg.channel.send("die die die")
		msg.channel.send("cause baby tonight")
		msg.channel.send("the creepers tryna steal all our stuff again")
		msg.channel.send("cause baby tonight")
		msg.channel.send("your grab your pick shovel and bolt again")
		msg.channel.send("and run run until its done done")
		msg.channel.send("until the sun comes up in the morn")
		msg.channel.send("cause baby tonight")
		msg.channel.send("the creepers tryna steal all our stuff again")
		msg.channel.send("dig up diamonds and craft those diamonds")
		msg.channel.send("and make some armour get it baby")
		msg.channel.send("go and forge that like you so mlg pro")
		msg.channel.send("the swords made of diamonds so come at me bro")
		msg.channel.send("training in your room under the torchlight")
		msg.channel.send("hone that form to get you ready for the big fight")
		msg.channel.send("every single day and the whole night")
		msg.channel.send("creepers out prowlin alright")
		msg.channel.send("look at me look at you")
		msg.channel.send("take my revenge thats what im gonna do")
		msg.channel.send("im a warrior baby what else is new")
		msg.channel.send("and my blades gonna tear through you bring it")
		msg.channel.send("cause baby tonight")
		msg.channel.send("the creepers tryna steal all our stuff again")
		msg.channel.send("yeah baby tonight")
		msg.channel.send("grab your sword armour and go")
		msg.channel.send("take your revenge oh-oh oh-oh")
		msg.channel.send("so fight fight like its the last last night")
		msg.channel.send("of your life life show them your bite")
		msg.channel.send("cause baby tonight")
		msg.channel.send("the creepers tryna steal all our stuff again")
		msg.channel.send("cause baby tonight")
		msg.channel.send("your grab your pick shovel and bolt again")
		msg.channel.send("and run run until its done done")
		msg.channel.send("until the sun comes up in the morn")
		msg.channel.send("cause baby tonight")
		msg.channel.send("the creepers tryna steal all our stuff again")
	}
})

client.login(process.env.BOT_TOKEN)