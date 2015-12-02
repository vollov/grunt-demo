'use strict';

var DB = require('../lib/db');
var Config = require('../lib/config');

module.exports = function(app) {
	app.get('/api/user', function(req, res) {

	});

	app.get('/api/user/:id', function(req, res){
		var id = req.params.id;
	
	});
	
	app.post('/api/user', function(req, res){
	
	});
	
	app.put('/api/user', function(req, res){
		var id = req.body._id;
		delete req.body['_id']
	});
	
	app.delete('/api/user/:id', function(req, res){
		var id = req.params.id;
		
	});
};