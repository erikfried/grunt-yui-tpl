(function () {
    var ops = 0;
    //This should no longer fail lint
    if (true) {
        ops++;
    }

    //But this should...
    function takesRidiculouslyManyArgs(a, b, c, d, e, f) {
        ops++;
        return a + b + c + d +e +f;
    }

    return takesRidiculouslyManyArgs(1, 2, 3, 4, 5, 6);

}());