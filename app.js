var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
var age;
age = 50;
var a;
a = 'Max';
var toggle;
toggle = true;
var empty;
empty = null;
var notInitialize;
notInitialize = undefined;
var callback;
callback = function (a) { return 100 + a; };
var anything;
anything = -20;
anything = 'Text';
anything = {};
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
var person;
person = ['Max', 21];
var Toggle;
(function (Toggle) {
    Toggle[Toggle["LOADING"] = 0] = "LOADING";
    Toggle[Toggle["READY"] = 1] = "READY";
})(Toggle || (Toggle = {}));
;
var loading = {
    status: Toggle.LOADING
};
if (loading.status === Toggle.READY) {
    console.log('READY');
}
;
var union;
union = 1;
union = 'string';
var union2;
// function showMessage(message: string): void;
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date,
        updateAt: new Date
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close'
};
