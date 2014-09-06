

var should = require("should");
var plans = require("../lib/plans");

describe("Plans module", function () {

    describe("working with database", function () {

        it("should be able to store data", function (done) {

            plans.setData({message:"Hello"}, function(result) {

                    result.success.should.equal(true);
                    result.message.should.be.equal("Hello");
                    result.id.should.be.equal(1);

                    done();
            });
        });
    });
});
