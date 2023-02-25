const Discord = require("discord.js");
const Event = require("../../structures/EventClass");

module.exports = class InteractionCreate extends Event {
  constructor(client) {
    super(client, {
      name: "interactionCreate",
    });
  }
  async run(interaction) {
    if (interaction.type === Discord.InteractionType.ApplicationCommand) {
      const command = this.client.commands.get(interaction.commandName);

      if (!command) return;

      try {
        if (!command.isModal) {
          await interaction.deferReply();
        }
        command.run(this.client, interaction);
      } catch (e) {
        console.log(e);
      }
    }
  }
};
