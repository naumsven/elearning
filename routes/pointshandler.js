var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

function find (collec, query, callback) {
    mongoose.connection.db.collection(collec, function (err, collection) {
        collection.find(query).toArray(callback);
    });
}

var coll = mongoose.connection.db.collection('user');

