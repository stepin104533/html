function sumofNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    nums.forEach(function (x) {
        sum += x;
    });
    console.log("sum of the numbers", sum);
}
sumofNumbers(100, 200, 400);
sumofNumbers(30, 40, 50, 60, 70);
