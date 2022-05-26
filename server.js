const Discord = require("discord.js");

const client = new Discord.Client();

const fs = require("fs");

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

["command_handler", "event_handler"].forEach(handler =>{
  require(`./handlers/${handler}`)(client, Discord);
})

// Archived for reference (non-functional)
// const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));
// for(const file of commandFiles){
//   const command = require(./commands/${file});

//   client.commands.set(command.name, command);
// }

// client.once("ready", () => {
//   console.log("Bushbot is now online.");
// })

// client.on("message", message =>{
//   if(!message.content.startsWith(prefix) || message.author.bot) return;

//   const args = message.content.slice(prefix.length).split(/ +/);
//   const command = args.shift().toLowerCase();
//   if(command === "ping"){
//     client.commands.get("ping").execute(message, args);
//   } else if (command == "rick"){
//     client.commands.get("rick").execute(message, args);
//   } else if (command == "play"){
//     client.commands.get("play").execute(message, args);
//   } else if (command == "leave"){
//     client.commands.get("leave").execute(message, args);
//   } 
// });

client.on("ready", () =>{
        client.user.setActivity("", {
                type: "",
        })
});

client.login("");
