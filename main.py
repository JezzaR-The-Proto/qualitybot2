import discord, logging, time, random, os, sys, json, shutil
from discord.ext import commands, tasks
from itertools import cycle
from datetime import datetime

prefix = "&"
client = commands.Bot(command_prefix = prefix)
currentFolder = os.path.dirname(os.path.realpath(__file__))
status = cycle(["Qualityboi","Watching for commands &helpme","Ready for action!"])
logger = logging.getLogger('discord')
logger.setLevel(logging.INFO)
handler = logging.FileHandler(filename='discord.log', encoding='utf-8', mode='w')
handler.setFormatter(logging.Formatter('%(asctime)s:%(levelname)s:%(name)s: %(message)s'))
logger.addHandler(handler)
client.remove_command("help")

creeperAwMan = discord.Embed(title="Creeper",description="Aw man", inline=False)
creeperAwMan.add_field(name="So we back in the mine",value="got our pick axe swinging side to side \nSide-side to side", inline=False)
creeperAwMan.add_field(name="This task a grueling one \nhope to find some diamonds tonight",value="night night \ndiamonds tonight", inline=False)
creeperAwMan.add_field(name="heads up \nYou hear a sound",value="turn around and look up \ntotal shock fills your body", inline=False)
creeperAwMan.add_field(name="oh no its you again \ni can never forget those eyes eyes eyes",value="eyes eyes eyes \ncause baby tonight", inline=False)
creeperAwMan.add_field(name="the creepers tryna steal all our stuff again \ncause baby tonight",value="your grab your pick shovel and bolt again \nand run run until its done done", inline=False)
creeperAwMan.add_field(name="until the sun comes up in the morn \ncause baby tonight",value="the creepers tryna steal all our stuff again \njust when you think youre safe", inline=False)
creeperAwMan.add_field(name="overhear some hissing from right behind \nright right behind",value="thats a nice life you have \nshame its gotta end at this time time time", inline=False)
creeperAwMan.add_field(name="time ti time time \nblows up",value="then your health bar drops and you could use a one up \nget inside dont be tardy", inline=False)
creeperAwMan.add_field(name="so now youre stuck in there \nhalf a heart is left but dont die die die",value="die die die \ncause baby tonight", inline=False)
creeperAwMan.add_field(name="the creepers tryna steal all our stuff again \ncause baby tonight",value="your grab your pick shovel and bolt again \nand run run until its done done", inline=False)
creeperAwMan.add_field(name="until the sun comes up in the morn \ncause baby tonight",value="the creepers tryna steal all our stuff again \ndig up diamonds and craft those diamonds", inline=False)
creeperAwMan.add_field(name="and make some armour get it baby \ngo and forge that like you so mlg pro",value="the swords made of diamonds so come at me bro \ntraining in your room under the torchlight", inline=False)
creeperAwMan.add_field(name="hone that form to get you ready for the big fight \nevery single day and the whole night",value="creepers out prowlin alright \nlook at me look at you", inline=False)
creeperAwMan.add_field(name="take my revenge thats what im gonna do \nim a warrior baby what else is new",value="and my blades gonna tear through you bring it \ncause baby tonight", inline=False)
creeperAwMan.add_field(name="the creepers tryna steal all our stuff again \nyeah baby tonight",value="grab your sword armour and go \ntake your revenge oh-oh oh-oh", inline=False)
creeperAwMan.add_field(name="so fight fight like its the last last night \nof your life life show them your bite",value="cause baby tonight \nthe creepers tryna steal all our stuff again", inline=False)
creeperAwMan.add_field(name="cause baby tonight \nyour grab your pick shovel and bolt again",value="and run run until its done done \nuntil the sun comes up in the morn", inline=False)
creeperAwMan.add_field(name="cause baby tonight",value="the creepers tryna steal all our stuff again", inline=False)

uwuSoWarm = discord.Embed(title="~nyaa~",description=" ", inline=False)
uwuSoWarm.add_field(name="Rawr x3 nuzzles pounces on you uwu you so warm",value="couldn't help but notice your \nbulge from across the floor", inline=False)
uwuSoWarm.add_field(name="nuzzles your necky wecky ~murr~ hehe\nunzips your baggy ass",value="oof baby you so musky\ntake me and pet me and make me yours", inline=False)
uwuSoWarm.add_field(name="and don't forget to stuff me\nsee me wag my widdle baby tail",value="oh for your bulgy wulgy kissies and lickies your neck\n i hope daddy likies", inline=False)
uwuSoWarm.add_field(name="nuzzles and wuzzles your chest\ni be getting thirsty.",value="hey i got a little itch you think you could help me\nonly 7 inches long", inline=False)
uwuSoWarm.add_field(name="UwU PLZ ADOPT ME",value="paws on your bulge as i lick my lips", inline=False)
uwuSoWarm.add_field(name="bout to hit them with this furry shit",value="he don't see it coming", inline=False)

def logs(author,reason):
    with open("main.log", "a") as myfile:
        currentTime = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        myfile.write(f"[{currentTime}]: {author} sent {prefix}{reason}\n")

def createUser(uid):
    with open("credits.json") as credit:
        data = json.load(credit)
    data["users"].append({
        "id": uid,
        "credits": 100,
        "lastDaily": datetime.now().strftime("%Y-%m-%d")
    })
    with open("credits.json","w") as credit:
        json.dump(data, credit)

def chargeAccount(uid,amount):
    with open("credits.json") as credit:
        data = json.load(credit)
        listIndex = 0
        while listIndex < len(data["users"]):
            if data["users"][listIndex]["id"] == uid:
                lastDaily = data["users"][listIndex]["lastDaily"]
                currentCredits = data["users"][listIndex]["credits"]
                if currentCredits >= int(amount):
                    currentCredits -= int(amount)
                    data["users"].pop(listIndex)
                    data["users"].append({
                        "id": uid,
                        "credits": currentCredits,
                        "lastDaily": lastDaily
                    })
                    with open("credits.json","w") as credit:
                        json.dump(data, credit)
                        return 0
                else:
                    return 1
            listIndex += 1
        return 2

@client.event
async def on_ready():
    change_status.start()
    shutil.copy2(currentFolder + os.sep + "credits.json",currentFolder + os.sep + "credits.json.bak")
    with open("main.log", "a") as myfile:
        currentTime = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        myfile.write(f"[{currentTime}]: Bot ready\n")

@tasks.loop(seconds=15)
async def change_status():
    global prefix
    await client.change_presence(activity=discord.Game(next(status)))

@client.command()
async def ping(ctx):
    await ctx.send(f"Current ping: {round(client.latency*1000)}ms")
    logs(ctx.author,"ping")

@client.command()
@commands.has_permissions(manage_messages=True)
async def clear(ctx, *amount):
    amount = int(amount[0])
    await ctx.channel.purge(limit=amount)

@client.command()
async def helpme(ctx):
    commands={}
    commands["ping"]="Shows bot current ping."
    commands["clear [amount]"]="Clears [amount] number of posts."
    commands["helpme"]="Displays this message."
    commands["h"]="h"
    commands["help"]="no"
    commands["praise"]="YOU MUST PRAISE"
    commands["bitrate"]="uwu bitrate-san"
    commands["neil"]="neil"
    commands["christopher"]="christopher"
    commands["qualitybotv2"]="unoriginal content"
    commands["qualitybot"]="quality content"
    commands["**kurwa**"]="**FRICK**"
    commands["owo"]="owo-san"
    commands["uwu"]="uwu-chan"
    commands["creeper"]="aw man"
    commands["rawr"]="x3 nuzzles"
    commands["restart"]="oh no you found the secret command"
    commands["credits"]="checks current credits"
    commands["shop"]="shows qboi shop"
    commands["buy [item]"]="buys [item] from shop"
    commands["pay [mention] [amount]"]="pays [mention] [amount] credits"
    msg=discord.Embed(title='QualityBoi', description="Written by JezzaR The Protogen#6483 using Discord.py because heck js",color=0x00ff99)
    for command,description in commands.items():
        msg.add_field(name=command,value=description)
    await ctx.send("", embed=msg)
    logs(ctx.author,"helpme")

@client.command()
async def h(ctx):
    await ctx.send("h")
    logs(ctx.author,"h")

@client.command()
async def help(ctx):
    await ctx.send("you are beyond help")
    logs(ctx.author,"help")

@client.command()
async def praise(ctx):
    await ctx.send("PRAISE LORD AND SAVIOUR QualityBot!")
    await ctx.send("PRAISE THE ORB")
    await ctx.send("PRAISE NEIL")
    await ctx.send("PRAISE CHRISTOPHER")
    logs(ctx.author,"praise")

@client.command()
async def bitrate(ctx):
    await ctx.send("GIVE ME ALL YOUR JUICY DATA")
    logs(ctx.author,"bitrate")

@client.command()
async def neil(ctx):
    await ctx.send("may neil praise you")
    logs(ctx.author,"ping")

@client.command()
async def christopher(ctx):
    await ctx.send("christopher is love christopher is life")
    logs(ctx.author,"christopher")
    
@client.command()
async def qualitybotv2(ctx):
    await ctx.send("yes thats me")
    logs(ctx.author,"qualitybot2")

@client.command()
async def qualitybot(ctx):
    await ctx.send("no thats not me that the original you should know this")
    logs(ctx.author,"qualitybot")

@client.command()
async def kurwa(ctx):
    await ctx.send("**FRICK**")
    logs(ctx.author,"kurwa")

@client.command()
async def owo(ctx):
    await ctx.send("OwO")
    logs(ctx.author,"owo")

@client.command()
async def uwu(ctx):
    await ctx.send("UwU")
    logs(ctx.author,"uwu")

@client.command()
async def creeper(ctx):
    await ctx.send("aw man",embed=creeperAwMan)
    logs(ctx.author,"creeper")

@client.command()
async def restart(ctx):
    await ctx.send("Restarting main.py")
    time.sleep(1)
    PID = random.randint(500,5000)
    await ctx.send(f"Ending Process with PID {PID}; NAME Git CMD")
    time.sleep(4)
    await ctx.send(f"Starting main.py with args (ban:{ctx.author})")
    time.sleep(5)
    await ctx.guild.ban(ctx.author,reason="Don't restart the qualityboi")
    await ctx.send("main.py successfully restarted. Did I miss anything?")
    logs(ctx.author,"restart")

@client.command()
async def credits(ctx):
    with open("credits.json") as credit:
        data = json.load(credit)
        listIndex = 0
        found = False
        while listIndex < len(data["users"]):
            if data["users"][listIndex]["id"] == ctx.author.id:
                currentCredits = data["users"][listIndex]["credits"]
                await ctx.send(f"you have {currentCredits} qboi credits")
                listIndex = 1000000
                found = True
            listIndex += 1
        if found == False:
            createUser(ctx.author.id)
            await ctx.send("Successfully created user profile for qboi bank.\nThank you for creating a bank account with qboi bank, here are 100 credits to get you started.")

@client.command()
async def daily(ctx):
    with open("credits.json") as credit:
        data = json.load(credit)
        listIndex = 0
        found = False
        while listIndex < len(data["users"]):
            if data["users"][listIndex]["id"] == ctx.author.id:
                lastDaily = data["users"][listIndex]["lastDaily"]
                if lastDaily < datetime.now().strftime("%Y-%m-%d"):
                    currentCredits = data["users"][listIndex]["credits"]
                    currentCredits += 100
                    data["users"].pop(listIndex)
                    data["users"].append({
                        "id": ctx.author.id,
                        "credits": currentCredits,
                        "lastDaily": datetime.now().strftime("%Y-%m-%d")
                    })
                    found = True
                    with open("credits.json","w") as credit:
                        json.dump(data, credit)
                        await ctx.send(f"daily claimed you now have {currentCredits} qboi credits!")
                        break
                else:
                    await ctx.send("you have already claimed your daily today...")
                    found = True
                    break
            listIndex += 1
        if found == False:
            createUser(ctx.author.id)
            await ctx.send("Successfully created user profile for qboi bank.\nThank you for creating a bank account with qboi bank, here are 100 credits to get you started.")
            
        
@client.command()
async def shop(ctx, *item):
    shopItem={}
    shopItem["how to buy"]="use &buy then item"
    shopItem["ping"]="ping someone once using their user id (100 credits)"
    shopItem["qboi"]="buy qboi (10000000000000000 credits)"
    msg=discord.Embed(title='QualityBoi Shop', description="BUY MY SHIT",color=0x00ff99)
    for command,description in shopItem.items():
        msg.add_field(name=command,value=description, inline=False)
    await ctx.send("", embed=msg) 

@client.command()
async def buy(ctx, item, *pingArg):
    if item == "qboi":
        returnCode = chargeAccount(ctx.author.id,10000000000000000)
        if returnCode == 0:
            await ctx.send(f"oh god now im owned by someone else")
        elif returnCode == 1:
            await ctx.send(f"get outta here scammer you dont got enough qboi credits")
        elif returnCode == 2:
            createUser(ctx.author.id)
            await ctx.send("Successfully created user profile for qboi bank.\nThank you for creating a bank account with qboi bank, here are 100 credits to get you started.")
    elif item == "ping":
        pingID = f"<@{pingArg[0]}>"
        if len(pingArg[0]) < 18:
            await ctx.send("lmao nice try thats not a proper userid")
        else:
            await ctx.send(pingID)
            returnCode = chargeAccount(ctx.author.id,100)
            if returnCode == 0:
                await ctx.send(f"{pingID} on behalf of {ctx.author}")
            elif returnCode == 1:
                await ctx.send(f"get outta here scammer you dont got enough qboi credits")
            elif returnCode == 2:
                createUser(ctx.author.id)
                await ctx.send("Successfully created user profile for qboi bank.\nThank you for creating a bank account with qboi bank, here are 100 credits to get you started.")

@client.command()
async def pay(ctx, reciever, payamount):
    await ctx.send(f"paying {payamount} qboi credits to {reciever}")
    reciever = reciever.replace("<","")
    reciever = reciever.replace("@","")
    reciever = reciever.replace(">","")
    reciever = reciever.replace("!","")
    returnCode = chargeAccount(ctx.author.id,payamount)
    if returnCode == 0:
        await ctx.send(f"charged {ctx.author} {payamount} qboi credits")
        with open("credits.json") as credit:
            data = json.load(credit)
            listIndex = 0
            while listIndex < len(data["users"]):
                if data["users"][listIndex]["id"] == int(reciever):
                    lastDaily = data["users"][listIndex]["lastDaily"]
                    currentCredits = data["users"][listIndex]["credits"]
                    currentCredits += int(payamount)
                    data["users"].pop(listIndex)
                    data["users"].append({
                        "id": int(reciever),
                        "credits": int(currentCredits),
                        "lastDaily": lastDaily
                    })
                    with open("credits.json","w") as credit:
                        json.dump(data, credit)
                        await ctx.send(f"given {reciever} {payamount} qboi credits")
                        return
                listIndex += 1
    elif returnCode == 1:
        await ctx.send(f"get outta here scammer you dont got enough qboi credits")
    elif returnCode == 2:
        await ctx.send("bruh you cant send money if you dont have an account")
        createUser(ctx.author.id)
        await ctx.send("there you go there is an account for you it has 100 credits")

@client.event
async def on_message(ctx):
    await client.process_commands(ctx)
    if "uwu" in ctx.content.lower():
        await ctx.channel.send("OwO what's this?")
        with open("main.log", "a") as myfile:
            currentTime = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            myfile.write(f"[{currentTime}]: {ctx.author} sent a message including uwu\n")
    if "rawr" in ctx.content.lower() or "~nyaa~" in ctx.content.lower():
        await ctx.channel.send("",embed=uwuSoWarm)
        with open("main.log", "a") as myfile:
            currentTime = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            myfile.write(f"[{currentTime}]: {ctx.author} sent a message including rawr or ~nyaa~ :3\n")

client.run("imagine if i left the bot token here @coffeepanda0")