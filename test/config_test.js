'use strict';

var Config = require('../lib/config');

exports.testConfig = {
	setUp : function(done) {
		// setup here
		done();
	},
	'test config db_name' : function(test) {
		var config = Config().getDBConfig('prod')

		test.equal(config.db_name, 'gruntd', 'db_name should be gruntd.');
		test.done();
	},
};