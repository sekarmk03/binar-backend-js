require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const Sentry = require('@sentry/node');
const Tracing = require('@sentry/tracing');
const app = express();

const {
    ENVIRONMENT, PORT = 3000
} = process.env;

Sentry.init({
    dsn: 'https://4dc4f6f1e3134851bf25f4046eea7ef3@o1227988.ingest.sentry.io/4504078234812416',
    environment: ENVIRONMENT,
    integrations: [
        new Sentry.Integrations.Http({ tracing: true }),
        new Tracing.Integrations.Express({
            app
        })
    ],
    sampleRate: 1.0
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());
app.use(morgan('dev'));

// routes/handlers
app.get('/test', (req, res) => {
    try {
        return res.send(user);
    } catch (err) {
        throw new Error(err);
    }
});

app.get('/ok', (req, res) => {
    const user = {
        name: 'sabrina'
    };
    return res.send(user);
});

app.use(Sentry.Handlers.errorHandler());
app.use(function onError(err, req, res, next) {
    return res.status(500).json({
        status: false,
        message: err.message,
        data: null
    });
});

app.listen(PORT, () => console.log('listening on port', PORT))


