'use strict';
/**
 * Data Access Object
 */

var DB = require('../lib/db');


module.exports = function(config) {
	
	var db = DB(config);
		
	return {
		/**
		 * query table
		 */
		query: function(table_name, sql, callback){
			db.connect(function(err, connection){
				connection.query('SELECT * FROM ' + table, function(err, results, fields) {
					connection.release();
					callback(err, results, fields);
				});
			});
		},
		/**
		 * add a new record
		 */
		add: function(){
			
		},
		/**
		 * update an existing row
		 */
		update: function(){
			
		}
	}
}