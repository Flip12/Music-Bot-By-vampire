const client = require("../index");

client.on('ready', () => {
console.log(`${client.user.tag}`)
  client.user.setStatus("online")
    client.user.setActivity(`Type: /Play丨Prefix ${client.config.prefix}`, { type: 'LISTENING' })
});
