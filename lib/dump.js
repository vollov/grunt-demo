/**
 * Tools to dump table to table.json file
 * 
 * node lib\dump.js -m test table1 table2
 * mode = pord | test
 */

// http://nodejs.org/docs/v0.6.5/api/fs.html#fs.writeFile
var fs = require('fs');
var mysql = require('mysql');
var parseArgs = require('minimist')
var argv = parseArgs(process.argv.slice(2));

var DB = require('../lib/db');
var Config = require('../lib/config');

//console.dir(argv);
var Dump = function(cmd_dict) {
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
			//TODO: if mode == null, print help
			//TODO: if tables size is 0, print help
			// console.log('tables:');
			for(var index in tables){
				console.log('processing table ' + tables[index]);
				this.dump(connection, tables[index]);
			}
			
			connection.end();
		},
		/**
		 * dump table to file
		 */
		dump : function(connection, table_name) {
			var sql = 'select * from ??'
			var inserts = [table_name];
			var query = mysql.format(sql, inserts);
			
			connection.query(query, function(err, results, fields) {
			    if(err) throw err;

			    fs.writeFile(table_name + '.json', JSON.stringify(results), function (err) {
			      if (err) throw err;
			      console.log(table_name + ' done');
			    });

			    //connection.release(); 
			    
			});
		}
	}
};

var app = Dump(argv)
app.run();