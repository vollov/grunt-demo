'use strict';
/**
 * Data Access Object
 */

var DB = require('../lib/db');
var Log = require('../lib/logging');
var mysql = require('mysql');

module.exports = function(config) {
	
	var db = DB(config);
	var log = Log().getLog('dao');
	
	return {
		/**
		 * query table: sql, callback
		 * 
		 * SELECT [fields] from [table] where [condition]
		 *  e.g.
		 * var sql = "SELECT a,b,c FROM t1 WHERE ?? = ?";
		 * var filters = ['id', userId];
		 * sql = mysql.format(sql, filters);
		 */
		query: function(sql, filters, fields, callback ){
			db.connect(function(err, connection){
				var sql_string =  mysql.format(sql, filters);
				log.debug('query() sql_string=:' + sql_string);
				connection.query(sql_string, function(err, rows, fields) {
					connection.release();
					callback(err, rows);
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