import discord
import asyncio

client = discord.Client()

@client.event
async def on_ready():
    print("Logged in as:")
    print(client.user.name)
    print("ID:")
    print(client.user.id)
    print("Ready!")

@client.event
async def on_message(message):
    if message.author == client.user:
        return
    elif message.content.startswith("?ip"):
        await client.send_message(message.channel, "Play.curiummc.net")
@client.event
async def on_message(message):
    if message.author == client.user:
        return
    elif message.content.startswith("?bugs"):
        await client.send_message(message.channel, "Report any bugs in #bugs")
@client.event
async def on_message(message):
    if message.author == client.user:
        return
    elif message.content.startswith("?suggestions"):
        await client.send_message(message.channel, "Suggest stuff in #suggestions")
@client.event
async def on_message(message):
    if message.author == client.user:
        return
    elif message.content.startswith("?updates"):
        await client.send_message(message.channel, "Keep up to date with all the updates in #change log")
@client.event
async def on_message(message):
    if message.author == client.user:
        return
    elif message.content.startswith("@CuriumBot Your mum gey"):
        await client.send_message(message.channel, "Your mum has gey")
@client.event
async def on_message(message):
    if message.author == client.user:
        return
    elif message.content.startswith("@curiumbot Fuck off"):
        await client.send_message(message.channel, "Sorry sir this is a christan server so no swearing")
