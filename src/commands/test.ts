import { CommandInteraction, SlashCommandBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('test')
    .setDescription('just testing'),
  async execute(interaction: CommandInteraction) {
    await interaction.reply('test');
  }
};
