//Question 1
function grandGrandparent() {
  // console.log('grandGrandParent');
  grandParent();
}
function grandParent() {
  // console.log('grandParent');
  parent();
}
function parent() {
  // console.log('parent');
  child();
}
function child() {
  // console.log('child');
  innerchild();
}
function innerchild() {
  // console.log('innerChild');
  console.trace(); //trace the whole stack
}
grandGrandparent();
//Question 2
let a = 1;
let b = new Number(1);
console.log(a == b);
console.log(a === b);
//Question 3
let age = '51';
let validAge = '51';

age = age + 1;
validAge++; //converts the string into number
console.log(age);
console.log(validAge);

//Question 4 :to merge two array in two ways
const arr = [2, 23, 55, 23];
const brr = [23, 355, 423];

// const marrgedArray=arr.concat(brr);
const marrgedArray = [...arr, ...brr];

console.log(marrgedArray);
//Question 5 :to saparate 0's of a number with separator
const num1 = 1000000;
const num2 = 10_00_000; //numeric separator introduced in ES6
console.log(num1 === num2);
console.log('=====================');
//Question 6 :+ operartor
console.log(+true); //converts true into numeric value
console.log(!'false');
console.log('=====================');
//Question 7 :to find element in an array
const arr1 = [23, 44, 1, 39];
console.log(1 in arr1);
console.log(2 in arr1);
//in js index are treated as key so the  'in' oparator raturns true as 2 is in the index array of
//keys and 44 is not prasent in the index array so it wiil return false
console.log(44 in arr1);
//Question 7 :to check if anyone is failed
const marks = [
  { id: 22, marks: 45 },
  { id: 12, marks: 86 },
  { id: 29, marks: 25 },
  { id: 22, marks: 15 },
];
const PASSING_MARKS = 33;
const isFailed = marks.some((element) => element.marks < PASSING_MARKS);
console.log(isFailed);
console.log('=====================');
//Question 8 :to add certain element in an index
let arry = ['somya', 'ranu', 'khwaja'];
//add rahi in arry
//method 1
arry.unshift('rahi');
console.log(arry);
//method 2
arry.splice(1, 1, 'rahi');
console.log(arry);
//method 3
arry = ['rahi', ...arry];
console.log(arry);
console.log('=====================');
//Question 9 :to invoke a function without its name i.e function() not allowed
function show() {
  console.log('WOW');
}

const functionName = 'show'; //storing function name in a variable
console.log(window.show); //accessing function body  through window object
window[functionName](); //invoking it using dynemic prperty access
console.log('=====================');

//Question 10 :to stop set interval function
let flg = 0;

const id = setInterval(() => {
  console.log('inside interval');
  // flg++;
  console.log(++flg);
  if (flg > 3) {
    clearInterval(id); //function defined in window object which rechived id  which interrupts the setIinterval
  }
}, 1000);
console.log('=====================');

//Question 11 :to invoke 'iffy' with !
!(function () {
  console.log('I am amazed 😎');
})();
console.log('=====================');
//Question 12 :to get last element of an array

const arro = ['r', 'u', 'b', 'y'];
console.log(arro.at(-1));
console.log('=====================');
//Question 12 :to log numbers defined by number function
const number1 =  Number();
const number2 =  Number(undefined);
console.log(`num1= ${number1}`);
console.log(`num2= ${number2}`);
console.log('=====================');
//Question 13 :to show switch statemet uses '==' or '==='
const swv = "45";
switch (swv) {
    case 45:
        console.log('==');
        break;
        case "45":
            console.log('===');
            break;
            default:
                console.log(':');
                break;
            }
            
//Question 14 :to passing arguent mandatory
function checkErr() {
    throw new Error('kuch dala re udhar');
}
function showTheMassage(name= checkErr()) {
    console.log(name);
}

showTheMassage("karua tel");
// Question 15: to chesk between try and finally 
function test(){
  try {
  return 1
} finally {
  console.log('from finally');
  return 2
}
}
console.log(test());
//Question 16: 'Object.is' vs == and ===
console.log(-0 == 0);
console.log(-0 === 0);
Object.is(0,-0);// compares 0 ans NaN
//Question 17: defineProperty() and enumerable
const obj={};
Object.defineProperty(obj,"lang",{value:'js',enumerable:true})// keys are non enumerable in definePropert() i.e they are not available
// in loopoin operatin like object.keys,for in loop if not enumerable set to true in keys
console.log(obj);
console.log(obj.lang);
//Questin 18:this vs eturn
function superHero() {
  this.hero='hawk eye';
  return {hero:"Dr. Strange"}
}
const hero=new superHero()
console.log(hero);
//Question 19: make array length 0
const arry1=[12,33,5,70];
console.log(arry1);
//way 1
arry1.length=0;
console.log(arry1);
//way 2
arry1.splice(0,arry1.length);
console.log(arry1);
//Question 20:
console.log('======');
console.log(false==[]);
console.log(false==![]);//![]=FALSE in js,== makes [] to number
console.log('======');
//Question 21:Number.MAX_SAFE_INTEGER
console.log(88888888888888888);
console.log('MAX_SAFE_INTEGER');
console.log(Number.MAX_SAFE_INTEGER);
