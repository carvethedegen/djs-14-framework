// Do not touch this unless you know what you are doing.

module.exports = class Command {
  constructor(client, meta = {}) {
    this.client = client;
    this.name = meta.name;
    this.type = meta.type;
    this.options = meta.options || [];
    this.isModal = meta.isModal || false;
    this.category = meta.category || null;
    this.description = meta.description || null;
  }

  async run() {
    throw new Error(
      `The Slash Command "${this.name}" does not provide a run method.`
    );
  }
};
