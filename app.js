/** ----- Required External Modules ----- **/
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const { engine } = require('express-handlebars');
const routes = require('./routes/index.routes.js');

/** ----- App Variables ----- **/
const app = express();
const port = process.env.PORT || 5000;

/** ----- App Configuration ----- **/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// override with POST having ?_method=DELETE && PUT
app.use(methodOverride('_method'));
// handlebars setup
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');
// serve static files
app.use(express.static(path.join(__dirname, '/public')));

/** ----- Route Definitons ----- **/
app.use('/', routes);

app.get('/', (req, res) => {
  res.status(200).render('index');
});

/** ----- Server Activation ----- **/
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
