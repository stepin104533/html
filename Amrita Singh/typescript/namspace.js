//basic.ts
/// <reference path = 'Calc'/>
var basic;
(function (basic) {
    var Adder = /** @class */ (function () {
        function Adder() {
            this.calculate = function (x, y) {
                console.log(x * y);
            };
        }
        return Adder;
    }());
    var product = /** @class */ (function () {
        function product() {
            this.calculate = function (x, y) {
                console.log('product', x * y);
            };
        }
        return product;
    }());
    basic.product = product;
})(basic || (basic = {}));
