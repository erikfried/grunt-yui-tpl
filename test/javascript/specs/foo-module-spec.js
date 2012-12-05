/*global YUI, describe, it, expect, beforeEach, afterEach, spyOn*/

YUI.add('foo-module-spec', function (Y) {
    beforeEach(function () {
        console.log("before");
    });

    afterEach(function () {
        console.log("after");
    });

    describe("foo-module", function () {
        describe("Some functionality", function () {
            it("should do something", function () {
                //spec
                expect(Y.foo.something()).toBe(true);
            });
        });

        describe("Throttle function", function () {

            var spy;
            beforeEach(function () {
                spy = jasmine.createSpy();
                jasmine.Clock.useMock();
            });

            it("Should not call immediately", function () {
                var throttled = Y.foo.callOncePerInterval(spy);
                throttled();
                expect(spy.callCount).toBe(0);
            });
            it("Should be called after interval", function () {
                var throttled = Y.foo.callOncePerInterval(spy);
                throttled();
                jasmine.Clock.tick(401);
                expect(spy.callCount).toBe(1);
            });
            it("Should throttle when called many times", function () {
                var throttled = Y.foo.callOncePerInterval(spy);
                throttled();
                throttled();
                jasmine.Clock.tick(401);
                expect(spy.callCount).toBe(1);
            });
        });
    });
}, "0.0.1", {requires: ['foo-module']});