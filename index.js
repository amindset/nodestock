// Stock Market Portfolio App by Steven Harris

const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 5000;

// Set Handlebars Middleware
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const otherstuff = "Hello there, this is other stuff!";

// Set handlebar routes
app.get('/', (req, res) => {
    res.render('home', {
        stuff: otherstuff
    });
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Creates the port for the app
app.listen(PORT, () => console.log('Server listening on port ' + PORT));