const button = document.querySelector("button")! as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});

let age: number;
age = 50;
let a: string;
a = 'Max';
let toggle: boolean;
toggle = true;
let empty: null;
empty = null;
let notInitialize;
notInitialize = undefined;
let callback: (a: number) => number;
callback = (a) => { return 100 + a };

let anything: any;
 anything = -20;
anything = 'Text';
anything = {};

let some:unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
  str = some;
}

let person: [string, number]
person = ['Max', 21];

enum Toggle {LOADING, READY};

const loading = {
  status: Toggle.LOADING
}

if (loading.status === Toggle.READY) {
  console.log('READY')
};

let union: number | string;

union = 1;
union = 'string';

let union2: 'enable'  | 'disable';

// function showMessage(message: string): void;

function showMessage(message: string): void {
  console.log(message);
}


function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
    createAt: Date;
    updateAt: Date;
  }
}

const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date,
    updateAt: new Date,
  }
}

const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}