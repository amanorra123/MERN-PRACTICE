// const list = [1, 2, 3, 4];

// function isOdd(n) {
//   return n % 2; 
// }

// const output = list.filter(isOdd); 

// list.filter((x) => x > 4);

// console.log(output); 



const transactions=[
    {type:"income",amount:1000},
    {type:"expense",amount:400},
    {type:"income",amount:200},
    {type:"expense",amount:700},
    {type:"income",amount:1500},

];
// function calculateBalanece(transactions){
// const output =0;
// for(let i=0;i<transactions.length;i++){
// if(transactions[i].type==='income'){
//   output +=transactions.amount
// }
// else if(transactions[i].type==='expense'){
//   output-=transactions.amount
// }
// }

// return output;
// }
//  calculateBalanece(transactions);
// console.log(output);

const treduce = transactions.reduce((accumulator,num)=>
{
  if(num.type==="income"){
    return(accumulator+num.amount);
  }
  else{
    return(accumulator-num.amount);
  }
},0);
console.log("balance "+ treduce);

