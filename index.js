/*
    Name: index.js
    Path: /
    Description: This is the main file of the bot. It is the entry point of the bot.
    Author: carvethedegen
    Version: 1.0.0
    License: Apache-2.0

    Instructions:
    1. Install the required packages with npm install.
    2. Create a .env file in the root directory of the bot.
    3. Add the following to the .env file:
        TOKEN=YOUR_BOT_TOKEN
        GUILD_ID=YOUR_GUILD_ID
        MONGO_URI=YOUR_MONGO_URI
    4. Run the bot with node index.js
*/

require("dotenv").config();

const Client = require("./structures/Client");

const client = new Client();

client.login();
