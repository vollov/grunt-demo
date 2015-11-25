

CREATE TABLE user (
  id INT(10) UNSIGNED NOT NULL auto_increment,
  name VARCHAR(32) NOT NULL UNIQUE,
  email VARCHAR(128) NOT NULL UNIQUE,
  password BINARY(32) NOT NULL,
  role VARCHAR(8) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into user(name,email,password, role) values ('dave','dave@abc.com',UNHEX(SHA2('abc', 256)), 'user'),('admin','admin@abc.com',UNHEX(SHA2('abc', 256)), 'admin');