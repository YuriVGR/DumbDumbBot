const { Client, GatewayIntentBits, Events } = require("discord.js");
require("dotenv").config();

const token = process.env.TOKEN;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! ✅ ${readyClient.user.tag} is up and running!`);
});

client.login(token);