// map chaining 
const number =[1,23,4,5,6,7,7,8]
const newNum = number.map((num)=>{return num+10})
console.log(newNum)
const newNums = number.map((n)=>{return n*10}).map((n)=>{return n+1}).filter((n)=>{return n>=40})
console.log(newNums)