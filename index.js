const { Intents, Client, Constants } = require('discord.js')
const dotenv = require('dotenv')

dotenv.config()

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
  ]
})

client.on('ready', () => {
  client.user.setActivity('quoi ? feur xD', { type: 'PLAYING' })
  client.user.setUsername('Quoi-Feur bot')

  console.log("The bot is ready !")
})

client.on("messageCreate", (message) => {
  let endWord = message.content.split(" ").pop()

  if (endWord.toLowerCase() === "quoi") {
    message.channel.send("feur")
  } else if (endWord.toLowerCase() === "kwa") {
    message.channel.send("feur")
  } else if (endWord.toLowerCase() === "pourquoi") {
    message.channel.send("feur")
  }
  if (endWord.toLowerCase() === "1") {
    message.channel.send("2")
  } else if (endWord.toLowerCase() === "hein") {
    message.channel.send("2")
  } else if (endWord.toLowerCase === "hein?") {
    message.channel.send("2")
  }

  if (endWord.toLowerCase() === "ah") {
    message.channel.send("b")
  } else if (endWord.toLowerCase() === "a") {
    message.channel.send("b")
  }

  if (endWord.toLowerCase() === "toi") {
    message.channel.send("lette")
  } else if (endWord.toLowerCase() === "twa") {
    message.channel.send("lette")
  } else if (endWord.toLowerCase() === "toua") {
    message.channel.send("lette")
  }

  if (endWord.toLowerCase() === "tg") {
    message.channel.send("non")
  }

  if (endWord.toLowerCase() === "si") {
    message.channel.send("non")
  }

  if (endWord.toLowerCase() === "non") {
    message.channel.send("bril")
  }

  if (endWord.toLowerCase() === "oui") {
    message.channel.send("fi")
  } else if (endWord.toLowerCase() === "wi") {
    message.channel.send("fi")
  }

})

client.login(process.env.TOKEN);
