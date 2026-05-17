const {
    SlashCommandBuilder
} = require('discord.js');

module.exports = {

    data: new SlashCommandBuilder()
        .setName('session')
        .setDescription('Ouvre une session RP'),

    async execute(interaction) {

        const roleId = process.env.ROLE_ID;

        // Vérifie le rôle

        if (!interaction.member.roles.cache.has(roleId)) {

            return interaction.reply({
                content: "❌ Tu n'as pas la permission d'utiliser cette commande.",
                ephemeral: true
            });
        }

        const message = `
:loudspeaker: **SESSION RP OUVERTE** :green_circle:

> Une **session RP est maintenant ouverte** :hospital::performing_arts:
> Vous pouvez rejoindre et commencer à jouer.

> Merci de respecter le règlement et de jouer sérieusement.

:fire: Bon RP à tous !

https://www.roblox.com/fr/games/8704997000/Maple-Hospital

|| @everyone ||
`;

        await interaction.channel.send({
            content: message
        });

        await interaction.reply({
            content: "✅ Session envoyée avec succès.",
            ephemeral: true
        });
    }
};