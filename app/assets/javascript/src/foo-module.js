YUI.add('foo-module', function (Y) {

    Y.callOncePerInterval = function (wrappedFn, interval) {
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

});