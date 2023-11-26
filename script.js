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
    console.trace();//trace the whole stack
}
grandGrandparent();
//Question 2
let a=1;
let b=new Number(1);
console.log(a==b);
console.log(a===b);
//Question 3
let age='51';
let validAge='51'

age=age+1;
validAge++;//converts the string into number
console.log(age);
console.log(validAge);

//Question 4 :to merge two array in two ways
const arr=[2,23,55,23];
const brr=[23,355,423];

// const marrgedArray=arr.concat(brr);
const marrgedArray=[...arr,...brr];

console.log(marrgedArray);
//Question 5 :to merge two array in two ways
const num1=1000000;
const num2=10_00_000;//numeric separator introduced in ES6
console.log(num1===num2);
//Question 6 :to merge two array in two ways
console.log(+true);
console.log(!'kamala');
//Question 7 :to find element in n array
const arr1=[23,44,1,39];
console.log( 1 in arr1);
console.log(2 in arr1);
//in js index are treated as key so the  in oparator raturns true as 2 is in the index array of 
//keys and 44 is not prasent in the indes array so it wiil return false
console.log(44 in arr1);
//Question 7 :to check if anyone is failed
const marks=[
    {id:22,marks:45},
    {id:12,marks:86},
    {id:29,marks:25},
    {id:22,marks:35},
]
const PASSING_MARKS=33;
const isFailed=marks.some((element)=> element.marks< PASSING_MARKS)
console.log(isFailed);
//Question 8 :to add certain element in an index
let arry=['somya','ranu','khwaja'];
//add rahi in arry 
//method 1
arry.unshift('rahi');
console.log(arry);
//method 2
arry.splice(1,1,'rahi')
console.log(arry);
//method 3
arry=['rahi',...arry];
console.log(arry);
//Question 9 :to invoke a function without its name i.e function() not allowed
function show() {
    console.log('WOW');
}

const functionName='show';
console.log(window.show);

//Question 10 :to stop set interval function
let flg=0;

const id=setInterval(() => {
    console.log('inside interval');
    // flg++;
    console.log(++flg);
    if (flg>3) {
        clearInterval(id);//function defined in window object which rechived id  which interrupts the setIinterval
    }

}, 1000);












