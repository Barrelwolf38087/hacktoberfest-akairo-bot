const { Command } = require('discord-akairo');

class JoeCommand extends Command {
    constructor() {
        super('joe', {
            aliases: ['whosjoe', 'whoisjoe', 'joe?'],
            category: 'misc'
        });
    }

    exec(message) {
        return message.reply('Joe Mama!');
    }
}

module.exports = JoeCommand;