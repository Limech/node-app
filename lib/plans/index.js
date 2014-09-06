

var Datastore = require('nedb');

var db = new Datastore({ filename: 'plans.db', autoload: true });


var PlansResult = function() {

    var result = {
        success : false,
        message : null,
        id : null
    };
    return result;
};


var callb = {};

exports.setData = function(args, cb) {

    if (!cb) { console.log("bad callback");}

    callb = cb;
    var result =  new PlansResult();
    result.message = args.message;
    console.log(result.message);
    db.update({_id: 1},{message:result.message },{upsert: true}, function(err,numReplaced)
    {
        if (err) {
            console.log(err);
            callb(err);
        }
        else {
            result.success = true;
            result.id = numReplaced;
            callb(result);
        }
    });

};