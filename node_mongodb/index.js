const config = require('./config');

config.MongoClient.connect(config.url, function(err, db) {
		if (err) throw err;
		console.log("数据库已创建!");

		var dbase = db.db('test');
		dbase.createCollection('info_test', function(err, res){
			if(err) {
				throw err;
			}
			console.log('创建集合 info_test');
			db.close();

		})

});