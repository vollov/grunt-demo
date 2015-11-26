var Config = require('./config.js');
var path = require('path');
var bunyan = require('bunyan');

module.exports = function(){
	
	var log_dir = Config().getLogDir();
	
	return {
		getLog : function(name){
			var log = bunyan.createLogger({
				name : name,
				streams : [ {
					level : 'error',
					path : path.join(log_dir, 'error.log'), // log ERROR and above to a file
				}, {
					level : 'debug',
					path : path.join(log_dir, 'debug.log'), // log DEBUG and above to a file
				} ]
			});
			return log;
		}
	}
}