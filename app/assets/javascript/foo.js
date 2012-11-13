(function () {
    var ops = 0;
    //This should no longer fail lint
    if (true) {
        ops++;
    }

    //But this should...
    function takesArray(array) {
        var sum = 0,
            i = 0;
        for (; i < array.length; i++) {
            sum += array[i];
        }
        ops++;
        return sum;
    }

    return takesArray([1, 2, 3, 4, 5, 6]);

}());