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
//v46 - removed &creeper - caused too much lag
//v47 - enabled &helpme
//v48 - removed &creeper from help
//v49 - added needed perms for &kick
//v50 - added needed perms for &ban and updated needed perms for &kick
//v51 - added console logs to each command.
//v52 - bug fixes
//v53 - moar bug fixes
//v54 - meme release
//v55 - updated meme release
//v56 - mem release broke last time
//v58 - creeper aw man
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
	.setImage('https://imgur.com/fiOcMRg.png')
	.setTimestamp()
	.setFooter('~Made by @JezzaR#6483~', 'https://imgur.com/fiOcMRg.png');
var h = 0

client.on('ready', () => {
  console.log(`Logged in as QualityBot V2#0474!`)
  client.user.setActivity('for commands. &helpme', { type: 'WATCHING' });   
})

/*client.on("message", message => {
	if(message.content == "&ping"){
			message.channel.send("Pinging ...")
			.then((msg) => {
				msg.edit("Ping: " + (Date.now() - msg.createdTimestamp + "ms"))
				console.log(msg.guild.members.get(msg.author.id).displayName + " sent &ping")
			});
		}
})

client.on('message', message => {
  if (message.content.startsWith('&kick')) {
    const member = message.mentions.members.first()
	let staffrole = ['431474051383296001'];
        for(i=0;i<staffrole.length;i++) {
            if(message.member.roles.filter((role) => role.id == staffrole[i]).size > 0) {
                if (!member) {
					return message.reply(
						`Who are you trying to kick? You must mention a user.`
					)
					console.log(msg.guild.members.get(msg.author.id).displayName + " sent &kick but didn't mention anyone.")
					}

					if (!member.kickable) {
					return message.reply(`I can't kick this user. Sorry!`)
					console.log(msg.guild.members.get(msg.author.id).displayName + " sent &kick but QBV2 couldn't kick " + member + ".")
					}

					return member
					.kick()
					.then(() => message.reply(member + "was kicked."))
					console.log(msg.guild.members.get(msg.author.id).displayName + " sent &kick and was successful.")
					.catch(error => message.reply(`Sorry, an error occured.`))
					return;
            } else {
				message.reply("You do not have permission to kick")
				console.log(msg.guild.members.get(msg.author.id).displayName + " sent &kick but doesn't have permission to kick.")
			}
        }
	}
})

client.on('message', message => {
  if (message.content.startsWith('&ban')) {
    const member = message.mentions.members.first()
	let staffrole = ['431474051383296001'];
        for(i=0;i<staffrole.length;i++) {
            if(message.member.roles.filter((role) => role.id == staffrole[i]).size > 0) {
                if (!member) {
					return message.reply(
						`Who are you trying to ban? You must mention a user.`
					)
					console.log(msg.guild.members.get(msg.author.id).displayName + " sent &ban but didn't mention anyone.")
					}

					if (!member.banable) {
					return message.reply(`I can't ban this user. Sorry!`)
					console.log(msg.guild.members.get(msg.author.id).displayName + " sent &ban but QBV2 couldn't ban " + member + ".")
					}

					return member
					.ban()
					.then(() => message.reply(member + "was banned."))
					console.log(msg.guild.members.get(msg.author.id).displayName + " sent &ban and was successful.")
					.catch(error => message.reply(`Sorry, an error occured.`))
					return;
            } else {
				message.reply("You do not have permission to ban")
				console.log(msg.guild.members.get(msg.author.id).displayName + " sent &ban but doesn't have permission to ban.")
			}
        }
	}
});

client.on('message', msg => {
  if (msg.content === '&h') {
		msg.channel.send('h')
		console.log(msg.guild.members.get(msg.author.id).displayName + " sent &h")
  }
})

client.on('message', msg => {
  if (msg.content === '&help') {
		msg.channel.send('you are beyond help')
		console.log(msg.guild.members.get(msg.author.id).displayName + " sent &help")
  }
})

client.on('message', msg => {
  if (msg.content === '&praise') {
		msg.channel.send('PRAISE LORD AND SAVIOUR @QualityBot V2#0474')
		msg.channel.send('PRAISE THE ORB')
		msg.channel.send('PRAISE NEIL')
		msg.channel.send('PRAISE CHRISTOPHER');
		console.log(msg.guild.members.get(msg.author.id).displayName + " sent &praise")
  }
})

client.on('message', msg => {
  if (msg.content === '&bitrate') {
		msg.channel.send('GIVE ME ALL YOUR JUICY DATA')
		console.log(msg.guild.members.get(msg.author.id).displayName + " sent &bitrate")
  }
})

client.on('message', msg => {
  if (msg.content === '&neil') {
		msg.channel.send('may neil praise you')
		console.log(msg.guild.members.get(msg.author.id).displayName + " sent &neil")
  }
})

client.on('message', msg => {
  if (msg.content === '&christopher') {
		msg.channel.send('christopher is love christopher is life')
		console.log(msg.guild.members.get(msg.author.id).displayName + " sent &christopher")
  }
})

client.on('message', msg => {
  if (msg.content === '&qualitybotv2') {
		msg.channel.send('yes thats me')
		console.log(msg.guild.members.get(msg.author.id).displayName + " sent &qualitybotv2")
  }
})

client.on('message', msg => {
  if (msg.content === '&qualitybot') {
		msg.channel.send('no thats not me thats the original you should know this')
		console.log(msg.guild.members.get(msg.author.id).displayName + " sent &qualitybot")
  }
})

client.on('message', msg => {
  if (msg.content === '&kurwa') {
		msg.channel.send('**FRICK**')
		console.log(msg.guild.members.get(msg.author.id).displayName + " sent &kurwa")
  }
})

client.on('message', msg => {
	if (msg.content === '&helpme') {
		msg.channel.send(helpembed);
		console.log(msg.guild.members.get(msg.author.id).displayName + " sent &helpme")
	}
})

client.on('message', msg => {
	if (msg.content === '&owo') {
		msg.channel.send("OwO");
		console.log(msg.guild.members.get(msg.author.id).displayName + " sent &owo")
	}
})

client.on('message', msg => {
	if (msg.content === '&uwu') {
		msg.channel.send("UwU");
		console.log(msg.guild.members.get(msg.author.id).displayName + " sent &uwu")
	}
})
*/
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

client.on('message', msg => {
	if (msg.content.includes('?')) {
		msg.channel.send("OwO what's this?");
		console.log(msg.guild.members.get(msg.author.id).displayName + " sent &")
	}
})
client.login(process.env.BOT_TOKEN)