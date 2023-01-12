import { Client, CommandInteraction, Interaction } from 'discord.js';
import { bot } from '..';

export default {
  name: 'interactionCreate',
  once: false,
  async execute(interaction: Interaction) {
    if (!interaction.isCommand()) return;

    bot.commands.get(interaction.commandName)?.execute(interaction as CommandInteraction);
  }
};
