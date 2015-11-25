'use strict';

var DAO = require('../lib/dao');
var Config = require('../lib/config');

exports.testDao = {
	setUp : function(done) {
		var config = Config().getTestConfig()
		this.dao = DAO(config);
		done();
	},
	'test dao query' : function(test) {
		var sql = 'select * from user';
		this.dao.query(function('user', , connection){
			
		});
	},
};