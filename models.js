var mongoose = require('mongoose');
var sugar = require('mongoose-sugar');

var schema = sugar.schema(mongoose);
var refs = sugar.refs;

exports.Library = schema('Library', {
    name: {type: String, required: true},
    description: String,
    tags: refs('Tag')
});

exports.Tag = schema('Tag', {
    name: String,
    children: refs('Tag')
});


exports.User = schema('User', {
    name: {type: String, required: true},
    email: String,
    phone: Number,
    address : String
});

