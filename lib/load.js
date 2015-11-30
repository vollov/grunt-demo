/**
 * Tools to dump table to table.json file
 * node lib\load.js -m test table1 table2
 */

var fs = require('fs');
var mysql = require('mysql');
var parseArgs = require('minimist')
var argv = parseArgs(process.argv.slice(2));

var DB = require('../lib/db');
var Config = require('../lib/config');

var Load = function(cmd_dict) {
	
	var cmd_dict = cmd_dict;
	console.log('mode = ' + cmd_dict.m);
	//initialize db connection by mode
	var db_config = Config().getDBConfig(cmd_dict.m)
	var db = DB(db_config);
	
	return {
		/**
		 * loop through tables
		 */
		run : function() {
		
			tables = cmd_dict._;
			mode =cmd_dict.m;

			// single thread connection 
			var connection = db.conn(); 
			connection.connect();
			
			//drop all tables listed in command
			for(var index in tables){
				console.log('drop table ' + tables[index]);
				//this.dump(connection, tables[index]);
			}
			
			//create all tables listed in command
			for(var index in tables){
				console.log('create table ' + tables[index]);
				//this.dump(connection, tables[index]);
			}
			
			//load data form json files
			for(var index in tables){
				console.log('populate table ' + tables[index]);
				//this.dump(connection, tables[index]);
			}
			
			connection.end();
		},
		/**
		 * Create table by table name
		 */
		create : function(table_name){
			
		},
		
	}
}

var app = Load(argv)
app.run();