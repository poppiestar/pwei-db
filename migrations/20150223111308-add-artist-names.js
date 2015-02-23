dbm = dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
    db.createTable('artistNames', {
        id: { type: 'int', primaryKey: true },
        artistName: 'string'
    }, callback);
};

exports.down = function(db, callback) {
    db.dropTable('artistNames', callback);
};
