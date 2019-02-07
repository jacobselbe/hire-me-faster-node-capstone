const express = require('express');
const app = express();

app.use(express.json());//do I need this?
app.use(express.static('public'));

let server;

function runServer() {
    const port = process.env.PORT || 8080;
    return new Promise((resolve, reject) => {
        server = app
            .listen(port, () => {
                console.log(`Your app is listening on port ${port}`);
                resolve(server);
            })
            .on("error", err => {
                reject(err);
            });
    });
}

function closeServer() {
    return new Promise((resolve, reject) => {
        console.log("Closing server");
        server.close(err => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}

//remember change runServer and closeServer when you integrate mongoose

// function runServer(databaseUrl = DATABASE_URL, port = PORT) {
//     return new Promise((resolve, reject) => {
//         mongoose.connect(databaseUrl, err => {
//             if (err) {
//                 return reject(err);
//             }
//             server = app.listen(port, () => {
//                 console.log(`Your app is listening on port ${port}`);
//                 resolve();
//             })
//                 .on('error', err => {
//                     mongoose.disconnect();
//                     reject(err);
//                 });
//         });
//     });
// }

// function closeServer() {
//     return mongoose.disconnect().then(() => {
//         return new Promise((resolve, reject) => {
//             console.log('Closing server');
//             server.close(err => {
//                 if (err) {
//                     return reject(err);
//                 }
//                 resolve();
//             });
//         });
//     });
// }

if (require.main === module) {
    runServer().catch(err => console.error(err));
}

module.exports = {app, runServer, closeServer};