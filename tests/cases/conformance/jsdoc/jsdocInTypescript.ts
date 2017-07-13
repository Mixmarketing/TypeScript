// @strict: true

// grammar error from checker
var ara: Array.<number> = [1,2,3];

function f(x: ?number, y: Array.<number>) {
    return x ? x + y[1] : y[0];
}
function hof(ctor: function(new: number, string)) {
    return new ctor('hi');
}
function hof2(f: function(this: number, string): string) {
    return f(12, 'hullo');
}
var whatevs: * = 1001;
var ques: ? = 'what';
var g: function(number, number): number = (n,m) => n + m;
var variadic: ...boolean = [true, false, true];
var most: !string = 'definite';
var weird1: new:string = {};
var weird2: this:string = {};