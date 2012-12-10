var poolModule = require('generic-pool');
var pool = poolModule.Pool({
  name : 'utopia_connection_pool',
  create : function (callback) {
    var Client = require('mysql').createConnection({
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'db_utopia',
      multipleStatements : true
    });
    callback(null, Client);
  },
  destroy : function (client) {
    client.end();
  },
  min : 10,
  // specifies how long a resource can stay idle in pool before being removed
  idleTimeoutMillis : 30000,
  // if true, logs via console.log - can also be a function
  log : false
});

exports.pool = pool;

