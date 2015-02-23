dbm = dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
    db.createTable('releases', {
        id: { type: 'int', primaryKey: true },
        year: 'int',
        release: 'string',
        artistNameId: 'int',
        releaseTypeId: 'int',
        labelId: 'int'
    }, callback);
};

exports.down = function(db, callback) {
    db.dropTable('releases', callback);
};
