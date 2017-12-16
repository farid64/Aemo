'use strict';

const MySQL = require('mysql');
const Bcrypt = require('bcrypt');


const connection = MySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'aemo'
});


server.connection({
    host: 'localhost',
    port: 3000
});
connection.connect();

server.route({
    method: 'GET',
    path: '/helloworld',
    handler: function (request, reply) {
        return reply('hello world');
    }
});

server.route({
    method: 'GET',
    path: '/users',
    handler: function (request, reply) {

        connection.query('SELECT action_type, action_subtype FROM aemo_action', function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            reply(results);
        });

    }
});

server.route({
    method: 'GET',
    path: '/user/{uid}',
    handler: function (request, reply) {
        const uid = request.params.uid;

        connection.query('SELECT action_type, action_subtype, action_status FROM aemo WHERE emotions = "' + uid + '"', function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            reply(results);
        });

    },
    config: {
        validate: {
            params: {
                uid: Joi.number().integer()
            }
        }
    }
});

server.route({
    method: 'POST',
    path: '/signup',

    handler: function (request, reply) {

        const username = request.payload.username;
        const email = request.payload.email;
        const password = request.payload.password;

        var salt = Bcrypt.genSaltSync();
        var encryptedPassword = Bcrypt.hashSync(password, salt);

        var orgPassword = Bcrypt.compareSync(password, encryptedPassword);

        connection.query('INSERT INTO aemo_action (user_id,emotion_id,emotions, action_type, action_subtype,action_status ) VALUES ("' + username + '","' + email + '","' + encryptedPassword + '")', function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            reply(results);
        });

    },
    config: {
        validate: {
            payload: {
                username: Joi.string().alphanum().min(3).max(30).required(),
                email: Joi.string().email(),
                password: Joi.string().regex(/^[a-zA-Z0-9]{8,30}$/)
            }
        }

    }
});


// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});