'use strict';

var DB = require('../lib/db');
var Log = require('../lib/logging');
var mysql = require('mysql');

module.exports = function(config) {
	
	var db = DB(config);
	var log = Log().getLog('dao');
	
	return {
		/**
		 * return a user by id
		 */
		getById : function(id){
			
		},
		/**
		 * save a new user
		 */
		save : function(user) {
			
		},
		/**
		 * remove a user by id
		 */
		remove : function(id) {
			
		},
		
		/**
		 * update a user by id
		 */
		update : function(id, user){
			
		}
	}
}