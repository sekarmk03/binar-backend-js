const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());

const server = app.listen(3001, function () {
    console.log('server running on port 3001');
});


const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

app.get('/', (req, res, next) => {
    res.send('ok');
});

app.post('/notifications/:user_id', (req, res, next) => {
    try {
        const data = require('./notifications.json');
        const { user_id } = req.params;
        const id = data.id + 1;

        const newData = {
            id: data.id + 1,
            user_id: +user_id,
            title: req.body.title,
            message: req.body.message,
            isRead: false
        };

        data.id = id;                                   // update id
        data.notifications.push(newData);               // add new data
        fs.writeFile('./notifications.json', JSON.stringify(data), (err) => {
            console.log = (err);
        }); // save data

        // send notif to frontend
        io.emit(`NOTIFICATIONS-${user_id}`, data.notifications);

        // return response
        return res.json({
            status: true,
            message: 'success',
            data: newData
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            status: false,
            message: err.message,
            data: null
        });
    }
});

io.on('connection', function (socket) {
    socket.on('LOAD_NOTIFICATIONS', (userID) => {
        const data = require('./notifications.json');
        const notifUser = data.notifications.filter(el => el.user_id == userID);

        io.emit(`NOTIFICATIONS-${userID}`, notifUser);
    });

    socket.on('SEND_MESSAGE', function (data) {
        io.emit('MESSAGE', data);
        console.log(data);
    });
});