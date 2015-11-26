'use strict';

var DAO = require('../module/dao');
var Config = require('../lib/config');

exports.testDao = {
	setUp : function(done) {
		var db_config = Config().getDBConfig('test')
		this.dao = DAO(db_config);
		done();
	},
	'test dao query' : function(test) {
		var sql = 'select * from user where ??=? and ??=?';
		var filters = ['name','dave','role','user'];
		var fields = ['name', 'email'];
		this.dao.query(sql, filters, fields, function(err, rows){
			if (!err) {
				var expected = 1;
				var actual = rows.length
				test.equal(expected, actual, 'result size should be '+ expected);
				return rows;
			} else {
				throw err;
			}
		});
		test.done();
	},
};