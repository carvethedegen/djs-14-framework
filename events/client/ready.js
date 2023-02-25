// This is the file called when the bot logs in with the token from your .env file.

const Event = require("../../structures/EventClass");
const CommandHandler = require("../../handlers/Command");
const { ActivityType } = require("discord.js");

module.exports = class ReadyEvent extends Event {
  constructor(client) {
    super(client, {
      name: "ready",
    });
  }

  async run() {
    // This is the code that loads all the slash commands.
    const guild = this.client.guilds.cache.get(process.env.GUILD_ID);
    await guild.members.fetch();
    await new CommandHandler(this.client)
      .build("../commands")
      .then(() => console.log("Slash commands loaded."));
    console.log(`${this.client.user.tag} is online.`);

    // Set the bot's presence.
    // You can change the status and activity type.
    this.client.user.setPresence({
      activities: [
        {
          name: `For your commands...`,
          type: ActivityType.Watching,
        },
      ],
      status: "dnd",
    });
  }
};
