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
  



