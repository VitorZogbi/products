const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

const port = normalizePort(process.env.PORT || 3000);
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
//server.on('error', onError);
//server.on('listening', onListening);
console.log(`API is alive on ${port}!`);