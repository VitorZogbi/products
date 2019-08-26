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

function onError(error) {
    if (error.syscall !== 'listen') {
        throw new error;
    }

    const bind = typeof port === 'string' ? 'Pipe' + port : 'Port' + port;

    switch (error.code) {

    }
}