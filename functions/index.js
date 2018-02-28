const functions = require('firebase-functions');
var webclient = require("request");

exports.ampArticle = functions.https.onRequest((request, response) => {

    let url = 'https://yosshitaku067.github.io';

    var xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        webclient.get({
            url: url + request.query.path,
            qs: {}
        }, function(error, response, body) {
            resolve(body);
        });
    }).then(doc => {
        return response.send(doc);
    });
});