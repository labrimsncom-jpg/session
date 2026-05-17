require('dotenv').config();

const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'session',
        description: 'Ouvre une session RP'
    }
];

const rest = new REST({ version: '10' })
    .setToken(process.env.TOKEN);

(async () => {

    try {

        console.log('🔄 Déploiement des commandes...');

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID,
                process.env.GUILD_ID
            ),
            { body: commands }
        );

        console.log('✅ Commandes déployées.');

    } catch (error) {

        console.error(error);
    }

})();