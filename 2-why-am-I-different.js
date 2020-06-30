var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
var color = Color.Blue;
var Square = /** @class */ (function () {
    function Square(color) {
        this.color = Color.Blue;
        this.height = 33;
        this.color = color;
    }
    return Square;
}());
console.log(new Square(Color.Blue));
var shape = { color: Color.Blue, height: 33 };
