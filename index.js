const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello Express app!')
})
  
app.listen(3000, () => {
    console.log('\033[0;32m Loged in as : ')
});
app.use('/ping', (req, res) => {
	res.send(new Date());
});

const { Client, Collection } = require("discord.js");

const client = new Client({
    intents: 32767,
  allowedMentions: { repliedUser: false },
});
module.exports = client;
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");
require("./handler")(client);

client.login(client.config.token);