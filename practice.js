
// 1.find maximum number.
const numbers=[11,12,44,9,4];
const  maximum=Math.max(...numbers);
console.log(maximum);

// 2.even or odd  
var  number=20;
if(number%2==0){
    console.log("number is even")
}
else{
    console.log("number is odd")
}

// 3.leap year

var year=2019;
if(year%4==0){
    if(year%100==0){
        if(year%400!=0){
            console.log("this is leep year");
        }
        else{
            console.log("this  is not a leep year");
        }
        console.log("this is leep year");
    }
    else{
        console.log("this  is not a leep year");
    }
    console.log("this is leep year");
}else{
    console.log("this  is not a leep year");
}


// 5. factorial
var  number=5;
var fact=1;
for( let i=number;i>=1 ;i--)
{
fact*=i;
}
console.log(fact);

//6. fibonacci
var num=64;
var a=0,b=1;
while(num>=a){
console.log(a);
var temp=a +b;
a=b;
b=temp;
//  num--;
}

// 4.palindrom string
var str='abcba';
var temp=str.split("").reverse('').join('');
if(temp==str){
    console.log("palindrom");
}
else{
    console.log("not palindrom");
}


// verbing
// if greater the 3 add ing
//  if alreadyming then add ly
// if latter less than 3  unchanged.

function verbing(str) {
    if (str.length < 3) {
      return str; 
    } else if (str.slice(-3) === 'ing') {
      return str + 'ly'; 
    } else {
      return str + 'ing'; 
    }
  }
  console.log(verbing('read'));      
  console.log(verbing('reading'));  
  console.log(verbing('go'));        
  
// nothing
var n=2;
function square(num){
    return num*num;

}
function cube(num){
    return num*num*num;
}
var squre1=square(n);
console.log(squre1);
 var  cube1=cube(2);
 console.log(cube1);


const radiuses=[3,4,8,9,12]
function circumference(r){
     return(3.14*r*2);
}

function area(r){
   return (3.14*r*r*r);
}
function diameter(r){
    return (2*r);

}

const arr=radiuses.map(area);
const circum=radiuses.map(circumference);
const dia=radiuses.map(diameter);

console.log(arr);

console.log(circum);

console.log(dia);

//  return  binary
const list=[1,2,3,4];

function binary(num){
  return num.toString(2); 
}

 const bi=list.map(binary);
 console.log(bi);