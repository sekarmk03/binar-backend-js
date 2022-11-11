require('dotenv').config();
const {
    HTTP_PORT = 3000,
    VAPID_PUBLIC_KEY,
    VAPID_PRIVATE_KEY,
    VAPID_SUBJECT
} = process.env;

const express = require('express');
const cors = require('cors');
const path = require('path');
const webpush = require('web-push');
const fs = require('fs');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client')));

webpush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY);

app.post('/notification/subscribe', async (req, res) => {
    try {
        const subscriptions = require('./subscriptions.json');
        const subscription = req.body;

        // save subscription data
        subscriptions.push(subscription);
        fs.writeFile('./subscriptions.json', JSON.stringify(subscriptions), (err) => {
            console.log = (err);
        });

        const payload = JSON.stringify({
            title: 'ada notif baru nih geys!',
            body: 'ini adalah detail dari notifikasinya'
        });

        webpush.sendNotification(subscription, payload)
            .then(result => console.log(result))
            .catch(e => console.log(e.stack));

        res.status(200).json({ 'success': true });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            status: false,
            message: err.message
        });
    }
});

app.get('/send-notif', (req, res) => {
    const subscriptions = require('./subscriptions.json');

    const payload = JSON.stringify({
        title: '11.11!',
        body: 'ada promo 11.11 nih guys!'
    });

    // user_id : user.id
    // data: JSON.stringify(subscription);

    subscriptions.forEach(subscription => {
        webpush.sendNotification(subscription, payload)
            .then(result => console.log(result))
            .catch(e => console.log(e.stack));
    });

    res.status(200).json({ 'success': true });
});

app.listen(HTTP_PORT, () => console.log('listening on port', HTTP_PORT));