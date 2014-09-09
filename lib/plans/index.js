

var Datastore = require('nedb');
var prettyJson = require('prettyjson');

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

function loadFile(filename) {
    var fs = require('fs'),
        xml2js = require('xml2js');

    var parser = new xml2js.Parser({attrkey: 'attr'});
    fs.readFile(filename, function(err, data) {
        parser.parseString(data, function (err, result) {
        var doc = {  data: result  };
        db.insert(doc, function(err, newDoc) {
            if (err) { console.log("Error saving xml: "+ err);}
            else {
                console.log("Saved XML to database using ID: " + newDoc._id);
                getActionPoints(newDoc._id);

                console.log("Saved doc: %j",newDoc);
            }
        });
        });
    });
}

function getActionPoints(id)
{
    console.log("Finding action points for id: " + id);
    db.findOne( {_id: id}, function(err,doc) {
        if (err) { console.log("Error finding action points: "+ err);}
        else {
            doc.data.cpotm.actionPoint.forEach(function (elem) {
                console.log("Found ap: ", elem.attr.id);
            });
        }
    });

}

exports.setData = function(args, cb) {

    loadFile("test.xml");

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