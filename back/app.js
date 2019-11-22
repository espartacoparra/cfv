const express = require('express');
const router = require('./src/routes/routes');
const sessionRoutes = require('./src/routes/sessionRoutes');

const bodyParser = require('body-parser')
const Middlewares = require('./src/middlewares/middlewares');
const cors = require('cors');
const app = express();
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.set("port", 3000)
app.use('/', sessionRoutes);
app.use('/', Middlewares.apitoken, router);
app.listen(app.get('port'), () => {
    console.log('Corriendo en el puerto :' + app.get('port'));
});