


module.exports = function (db) {

    db.injects.update({_id: 1}, { verb: "PUT", path: "/api/test", responseBody: "", responseStatus: 400}, {upsert: true}, function(err, newDoc) {
        if (err) {
            console.log(err.message);
        } else {
            console.log("Added inject");
        }
    });
}