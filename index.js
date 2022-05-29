const { Intents, Client, MessageEmbed } = require('discord.js')
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
  client.user.setUsername('Quoi?')

  console.log("The bot is ready !")
})

client.on("messageCreate", (message) => {
  let helpEmbed = new MessageEmbed()
    .setTitle("Feur-Bot Help")
    .setColor("#0099ff")
    .setDescription("Un simple bot discord répondant de facon très insuportable aux messages des utilisateurs en faisant des jeux de mots.\nSur un harcèlement original de Miirage#3507\n\nExemple d'utilisation :\n\n\`\`\`\nUser1 : Tu as prévu quoi ?\nBot : Feur\nUser2 : Rien de particulier et toi ?\nBot : lette\`\`\`\n")
    .addField("Jeux de mots", "- \`Quoi\` => Feur\n- \`Hein\` => 2\n- \`Ah\` => b\n- \`Toi\` => lette\n- \`tg\` => non\n- \`Non\` => bril\n- \`Oui\` => fi\n- \`Mais\` => on\n- \`Pues\` => toi", true)
    .addField("Commandes", "- \`f?help\` => Affiche cet embed\n- \`f?patchNote\` => Affiche le patchNote\n- \`f?serveurCount\` => Affiche le nombres de serveurs sur lesquels le bot est présent", true)
    .addField("Liens Utiles", "- Lien du Github : https://github.com/Av32000/Feur-Bot\n- Lien d'invitation : https://discord.com/api/oauth2/authorize?client_id=975313345211154492&permissions=274945227776&scope=bot")
    .setFooter("Feur-Bot by @Av32000#9052")


  let patchNoteEmbed = new MessageEmbed()
    .setTitle("PatchNote")
    .setColor("#0099ff")
    .setDescription("PatchNote du bot")
    .addField("PatchNote : ", "- Prise en charge du \`koi\`")
    .setFooter("Feur-Bot by @Av32000#9052 | Patch note du 29/05/2022")

  let words = message.content.split(" ")

  message.content.split(" ").forEach(element => {
    if (element.startsWith(".") || element.startsWith("!") || element.startsWith("?")) {
      words.splice(words.indexOf(element), 1)
    }
  });


  let endWord = words.pop()

  if (endWord.toLowerCase() === "quoi") {
    message.channel.send("feur")
  } else if (endWord.toLowerCase() === "kwa") {
    message.channel.send("feur")
  } else if (endWord.toLowerCase() === "pourquoi") {
    message.channel.send("feur")
  } else if (endWord.toLowerCase() === "koi") {
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

  if (endWord.toLowerCase() === "non") {
    message.channel.send("bril")
  }

  if (endWord.toLowerCase() === "oui") {
    message.channel.send("fi")
  } else if (endWord.toLowerCase() === "wi") {
    message.channel.send("fi")
  }

  if (endWord.toLowerCase() === "mais") {
    message.channel.send("on")
  }

  if (endWord.toLowerCase() === "pues") {
    message.channel.send("toi")
  } else if (endWord.toLowerCase() === "pue") {
    message.channel.send("toi")
  }

  //Commands
  if (message.content == "f?help") {
    message.channel.send({
      embeds: [helpEmbed]
    })
    message.delete()
  }

  if (message.content == "f?patchNote") {
    message.channel.send({
      embeds: [patchNoteEmbed]
    })
    message.delete()
  }

  if (message.content == "f?serveurCount") {
    message.channel.send(`Le bot est actuellement sur ${client.guilds.cache.size} serveurs.`)
    message.delete()
  }

})

client.login(process.env.TOKEN);
