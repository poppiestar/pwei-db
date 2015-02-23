dbm = dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
    db.createTable('releaseTypes', {
        id: { type: 'int', primaryKey: true },
        releaseType: 'string'
    }, callback);
};

exports.down = function(db, callback) {
    db.dropTable('releaseTypes', callback);
};
