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
  const guildID = "895704892021288971"
  const guild = client.guilds.cache.get(guildID)
  let commands

  if (guild) {
    commands = guild.commands
  } else {
    commands = client.application.commands
  }

  commands?.create({
    name: "ping",
    description: "Renvoie pong si le bot est allumé"
  })
  commands?.create({
    name: "repeat",
    description: "Renvoie le message",
    options: [
      {
        name: "text",
        description: "Le texte a envoyer",
        required: true,
        type: Constants.ApplicationCommandOptionTypes.STRING
      }
    ]
  })



  client.user.setPresence({
    game: {
      name: 'Use f!help',
      type: "Playing",
      url: "https://discordapp.com/"
    }
  });

  client.user.setActivity()
  console.log("The bot is ready !")
})

client.on('interactionCreate', async (interaction) => {
  if (interaction.isCommand()) {
    const { commandName, options } = interaction

    if (commandName == "ping") {
      let file = require('./commands/ping')
      let instance = new file
      instance.exec(interaction);
    } else if (commandName == "repeat") {
      let file = require('./commands/repeat')
      let instance = new file
      instance.exec(interaction, options.getString("text"));
    }
  }
})

client.login(process.env.TOKEN);
