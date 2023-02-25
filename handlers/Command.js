// This is the command handler for slash commands (interactions), it will load all the commands in the commands folder.

const fs = require("fs");
const path = require("path");
const BaseCommand = require("../structures/CommandClass");

module.exports = class CommandClass {
  constructor(client) {
    this.client = client;
  }

  async build(dir) {
    try {
      const filePath = path.join(__dirname, dir);
      const files = await fs.promises.readdir(filePath);
      for (const file of files) {
        const stat = await fs.promises.lstat(path.join(filePath, file));
        if (stat.isDirectory()) this.build(path.join(dir, file));
        if (file.endsWith(".js")) {
          const Command = require(path.join(filePath, file));
          if (Command.prototype instanceof BaseCommand) {
            const cmd = new Command(this.client);
            await this.client.commands.set(cmd.name, cmd);
            await this.client.guilds.cache
              .get(process.env.GUILD_ID)
              .commands.create(cmd);
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
  }
};
