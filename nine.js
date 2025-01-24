//Array.reduce()
const mynums= [1,3,4,5]
const mytotal = mynums.reduce(function (acc,currentvalue){
    return acc + currentvalue
},0)
console.log(mytotal);
//  find bill 
const shoppingCart = [
    {
        item: "pant",
        price: 455
    },
    {
        item: "shirt",
        price: 399
    },
    {
        item: "shoes",
        price: 999
    }
]

const totalBill = shoppingCart.reduce((acc ,item)=>{return acc+item.price

},0)
console.log(totalBill)
