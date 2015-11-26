'use strict';

//var process = require('process');

module.exports = function() {

	var test_db_conf = {
		db_host: 'localhost',
		db_username: 'root',
		db_password: 'justdoit',
		db_name: 'gruntd_test',
	};
	
	var prod_db_conf = {
			db_host: 'localhost',
			db_username: 'root',
			db_password: 'justdoit',
			db_name: 'gruntd'
	};
		
	
	return {
		getDBConfig: function(mode){
			if(mode  === 'test'){
				return test_db_conf;
			} else {
				return prod_db_conf;
			}
		},
		getTestDBConfig: function(){
			
		},
		getLogDir: function(){
			if(process.platform === 'win32'){
				return 'C:\\opt\\var\\www\\gruntd';
			}else{
				return '/opt/www/gruntd/';
			}
		},
		secret: function(){
			return 'ozd*)605#4rk%1y&#$gaxn)b-5=#)jd%7(&)zzo^85k=+evbc+';
		}
	}
}