/**
 * @module foo-module
 */
YUI.add('foo-module', function (Y) {

    /**
     * @static
     * @class foo
     */
    Y.namespace("foo");
    /**
     * Throttles the supplied function, ensuring that it will only be called once per provided interval
     * @static
     * @method callOncePerInterval
     * @param {Function} wrappedFn
     * @param {Number} [interval=400] the throttle interval in milliseconds
     * @return {Function} The throttled function
     * @example
        var sendRequst = Y.foo.callOncePerInterval( function sendIt() {
            console.log("Sending expensive request!");
        }, 400);

        Y.one(".my-button").on("click", sendRequest);
        //Triple click -> one "Sending expensive request"
     */
    Y.foo.callOncePerInterval = function (wrappedFn, interval) {
        var threshold = interval || 400,
            timeOutHandle = null;

        return function () {
            var resetAndCall = function () {
                    timeOutHandle = null;
                    wrappedFn.apply(null, arguments);
                };

            if (timeOutHandle) {
                //If there is a previous timeout set -> first clear it.
                clearTimeout(timeOutHandle);
            }
            timeOutHandle = setTimeout(resetAndCall, threshold);
        };
    };

    /**
     * Does something: it returns true
     * @static
     * @method something
     * @return {Boolean}
     */
    Y.foo.something = function () {
        return true;
    };
});