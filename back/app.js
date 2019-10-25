const express = require('express');
const router = require('./src/routes/routes');
const app = express();

app.set("port",3000)
app.use('/',router);
app.listen(app.get('port'),()=>{
console.log('Corriendo en el puerto :'+app.get('port'));
});