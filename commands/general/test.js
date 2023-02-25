// This is a command that has subcommands.

const Discord = require("discord.js");
const Command = require("../../structures/CommandClass");

module.exports = class Test extends Command {
  constructor(client) {
    super(client, {
      name: "test",
      isModal: false,
      category: "General",
      type: Discord.ApplicationCommandType.ChatInput,
      description: "Test command.",
      options: [
        {
          name: "meow",
          description: "meow command.",
          type: Discord.ApplicationCommandOptionType.Subcommand,
        },
        {
          name: "bark",
          description: "woof command",
          type: Discord.ApplicationCommandOptionType.Subcommand,
        },
      ],
    });
  }

  async run(client, interaction) {
    if (interaction.options.getSubcommand() === "meow") {
      interaction.editReply("Meow...");
    } else if (interaction.options.getSubcommand() === "bark") {
      interaction.editReply("Woof!");
    }
  }
};
