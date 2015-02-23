dbm = dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
    db.createTable('labels', {
        id: { type: 'int', primaryKey: true },
        label: 'string'
    }, callback);
};

exports.down = function(db, callback) {
    db.dropTable('labels', callback);
};
