// This is the event handler, it will load all the events in the events folder.

const fs = require("fs");
const path = require("path");
const BaseEvent = require("../structures/EventClass");

module.exports = class EventClass {
  constructor(client) {
    this.client = client;
  }

  async build(dir) {
    const filePath = path.join(__dirname, dir);
    const files = await fs.promises.readdir(filePath);
    for (const file of files) {
      const stat = await fs.promises.lstat(path.join(filePath, file));
      if (stat.isDirectory()) this.build(path.join(dir, file));
      if (file.endsWith(".js")) {
        const Event = require(path.join(filePath, file));
        if (Event.prototype instanceof BaseEvent) {
          const event = new Event(this.client);
          this.client.events.set(event.name, event);
          this.client.on(event.name, event.run.bind(event));
        }
      }
    }
  }
};
