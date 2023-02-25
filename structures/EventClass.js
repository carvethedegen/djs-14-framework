// Do not touch this unless you know what you are doing.

module.exports = class Event {
  constructor(client, options = {}) {
    this.client = client;
    this.name = options.name;
  }

  async run() {
    throw new Error(`The Event "${this.name}" does not provide a run method.`);
  }
};
