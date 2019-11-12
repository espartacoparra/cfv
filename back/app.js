const express = require('express');
const router = require('./src/routes/routes');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.set("port", 3000)
app.use('/', router);
app.listen(app.get('port'), () => {
    console.log('Corriendo en el puerto :' + app.get('port'));
});