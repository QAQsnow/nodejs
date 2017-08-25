#创建一个数据库

CREATE DATABASE IF NOT EXISTS testdb;

use testdb;

CREATE TABLE IF NOT EXISTS tasks(
    task_id INT(11) AUTO_INCREMENT,
    subject VARCHAR(45) DEFAULT NULL,
    start_date DATE DEFAULT NULL,
    end_date DATE DEFAULT NULL,
    description VARCHAR(200) DEFAULT NULL,
    PRIMARY KEY(task_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

