'use strict';

var Utils = require('../lib/utils');

exports.testConfig = {
	
	setUp : function(done) {
		// setup here
		this.utils = Utils();
		this.docs = [{"_id":"54a4d108228799901cb889e5","name":"Kayak", "pwd":"aaa"},
		    		 {"_id":"54a4d108228799901cb889e6","name":"Lifejacket", "pwd":"aaa"}]
		done();
	},
	'test removeFields' : function(test) {
		var result = this.utils.removeFields(this.docs, 'pwd');
		var expected  = [{"name":"Kayak","_id":"54a4d108228799901cb889e5"},
		                 {"name":"Lifejacket","_id":"54a4d108228799901cb889e6"}]
		test.equal(result, expected, 'pwd field should be removed.');
		test.done();
	},
};