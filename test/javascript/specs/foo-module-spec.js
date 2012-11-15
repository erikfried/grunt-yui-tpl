/*global YUI, describe, it, expect, beforeEach, afterEach, spyOn*/

YUI.add('foo-module-spec', function (Y) {
    beforeEach(function () {
        console.log("before");
    });

    afterEach(function () {
        console.log("before");
    });

    describe("foo-module", function () {
        describe("Some functionality", function () {
            it("should do something", function () {
                //spec
                expect(true).toBe(true);
            });
        });
    });
});