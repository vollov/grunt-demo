'use strict';

var Log = require('../lib/logging');

exports.testLogging = {

	'test logger' : function(test) {
		// test logger function by write logger to file
		// + '['+ arguments.callee.toString() + ']'
		var log = Log().getLog('logging_test');
		log.debug('Debug message here');
		log.error('File io error');
		test.done();
	}
};