/*
Use this file to store functions that you want to use in multiple files in your bot.
Example of a function that checks if an interaction exists.
*/

module.exports = {
  interactionExists: async (client, message) => {
    const channel = client.channels.cache.get(message.channel.id);
    try {
      await channel.messages.fetch(message.id);
      return true;
    } catch (err) {
      return false;
    }
  },
};
