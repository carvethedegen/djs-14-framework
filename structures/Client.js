// This is the main client file for the bot.

const Discord = require("discord.js");
const EventHandler = require("../handlers/Event");
const Mongoose = require("mongoose");

module.exports = class BotClient extends Discord.Client {
  constructor(...opt) {
    super({
      opt,
      intents: 131071,
    });

    this.events = new Discord.Collection();
    this.commands = new Discord.Collection();
    new EventHandler(this).build("../events");
  }

  async login() {
    // Connect to MongoDB
    // If you don't want to use MongoDB, remove this or comment it out.
    await Mongoose.connect(process.env.MONGO_URI)
      .then(() => console.log("MongoDB Connected."))
      .catch((err) => console.log(err));

    await super.login(process.env.TOKEN);
  }
};
