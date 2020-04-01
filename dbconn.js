const mariadb = require('mariadb/callback');
const conn = mariadb.createConnection({
    user: 'radi',
    password: '123456',
    database: 'service center',
    host: 'localhost',
    post: '3306'
});

conn.connect(function(err) {
    if (err) {
        console.log(err.message);
    } else {
        console.log("連線成功");
        var sql = "show tables";
        conn.query(sql, function(err, result) {
            if (err) {
                console.log(err.message);
            } else {
                console.log(result);
            }
        });
        //conn.end();
    }
});