/**
 * Serveur express pour la mise en place d'un backend Node.js
 */
const express = require('express') // import d'Express
const app = express() // Lancement de l'application d'Express
const port = 4000 // Port de démarrage de l'application

app.set('view engine', 'ejs'); //Définir ejs comme moteur de template

// Route "/" accessible avec GET
app.get('/', (req, res) => {
    // res est une réponse HTTP
    res.render('home');
})

// Démarrage de l'application
app.listen(port, () => {
    console.log(`
        Le serveur est en écoute sur le port ${port}
        ctrl+clic (cmd+clic) : http://localhost:${port}
    `);
})