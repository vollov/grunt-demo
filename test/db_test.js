'use strict';

var DB = require('../lib/db');
var Config = require('../lib/config');

exports.testDB = {
	setUp : function(done) {
		var db_config = Config().getDBConfig('test')
		this.db = DB(db_config);
		done();
	},
	'test Database connection' : function(test) {
		this.db.connect(function(err, connection){
			connection.query('SELECT 1', function(err, docs) {
				connection.release();
				
				test.ok(!err, 'database connection should be true.');
				test.done();
			});
		});
	},
};