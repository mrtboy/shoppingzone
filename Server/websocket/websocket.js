import { connect } from 'http';

var WebSocketServer = require('websocket').server;

var http = require('http');


module.exports = app => {
    var clients = Array();

    // var interval = setInterval(function() {
    //     clients.forEach(function(client) {
    //         if (client.isAlive === false)
    //             clients.pop(client);
    //         else {
    //             //client.connection.sendUTF("daily news...");
    //         }
    //     });

    // }, 2000);
    var server = http.createServer(function(request, response) {
        console.log((new Date()) + ' Received request for ' + request.url);
        response.writeHead(404);
        response.end();
    });
    server.listen(41200, function() {
        console.log((new Date()) + ' Server is listening on port 41200');
    });

    var wsServer = new WebSocketServer({
        httpServer: server,
        autoAcceptConnections: false
    });

    function originIsAllowed(origin) {

        //logic here to detect whether the specified origin is allowed.
        return true;
    }

    wsServer.on('request', function(request) {
        if (!originIsAllowed(request.origin)) {
            // Make sure we only accept requests from an allowed origin
            request.reject();
            console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
            return;
        }

        var connection = request.accept('echo-protocol', request.origin);
        //clients.push({ origin: connection.origin, connection: connection });
        //console.log("---------------------------" + wsServer.clients)
        //console.log((new Date()) + ' Connection accepted.');
        connection.on('message', function(message) {
            if (message.type === 'utf8') {
                console.log('Received Message: ' + message.utf8Data);
                checkAsNewClient(connection, message)
                    //connection.sendUTF(message.utf8Data);
            }
        });
        connection.on('close', function(reasonCode, description) {
            console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
        });
    });
    //check if the client exits
    function checkAsNewClient(con, message) {
        console.log(message);
        var client = null;
        var sender, receiver, m = "";
        var parts = String(message.utf8Data).split('~');
        if (parts.length > 0)
            sender = parts[0];
        if (parts.length > 1)
            receiver = parts[1];
        if (parts.length > 2)
            m = parts[2];


        console.log(sender, receiver, m)
        if (clients.length === 0) {
            clients.push({
                user: sender,
                connection: con
            });
            client = clients[0];
        } else {
            var c = clients.find(e => e.user == sender)
            if (c != null) {
                var index = clients.indexOf(c);
                clients.splice(index, 1);
            }
            // clients.forEach(function(ec) {
            //     if (ec.user == sender) {
            //         client = ec;
            //         //break;
            //     }
            // });
            // if (client != null) {
            //     clients.pop(client);
            clients.push({
                user: sender,
                connection: con
            });
        }






        console.log("-------------------length is: ", clients.length)
        clients.forEach(function(e) {
            console.log(e.user)
        });
        client = null;
        clients.forEach(function(ec) {
            if (ec.user == receiver) {
                client = ec;
                //break;
            }
        });

        if (client != null && m != "") {
            client.connection.sendUTF(`${sender}~${receiver}~${m}`)
            console.log("----------------------")
        }
    }
}