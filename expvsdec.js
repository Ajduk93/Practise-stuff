const myFunction = (a, b) => a+b;

console.log(myFunction(11,25));

console.log(myFunctionExpression(3));

function myFunctionExpression(x){
    return `My math expression is: ${x+55}`;
}


const btnStart = document.getElementById(`btn-start-count`);
const btnStop = document.getElementById(`btn-stop-count`);


let stopCounting = true;
var time = 0 ;
var interval = setInterval(function() {
    if(!stopCounting) {
        time++;
        console.log( `My counter is > ${time}` );
    }
}, 1000);
function play(){
stopCounting = false;
}
function pause(){
stopCounting = true;
}

btnStart.addEventListener('click', play);
btnStop.addEventListener('click', pause);



const numbers = [1,5,9,4,6,10,150,100031];

const min = Math.min(...numbers);

console.log(min);

const max = Math.max(...numbers);

console.log(max);



let mini=numbers[0];

let maxi=numbers[0];

for(let i=0; i<numbers.length;i++){
    if(numbers[i] < mini){
        mini=numbers[i];
    }
    if(numbers[i]>maxi){
        maxi=numbers[i];
    }
}
console.log(mini);
console.log(maxi);

const shopArticles = [
{
    name:`Apples`,
    price:50
},
{
    name:`Bananas`,
    price:100
},
{
    name:`Oranges`,
    price:75,
},
{
    name:`Papayas`,
    price:300
}
]

console.log(shopArticles);

const shopArticlesPush = shopArticles.push({name:`Coconut`,price: 250});


const shopArticlesUnshift = shopArticles.unshift({name:`Oregano`,
price:20});


shopArticles.splice(2,0, {
    name:`Tomatoes`,
    price: 145
});

console.log(shopArticles);

const shopArticlesPop = shopArticles.pop();

console.log(shopArticlesPop);

const shopArticlesLastThree = shopArticles.slice(-3);

console.log(shopArticlesLastThree);

const shopArticlesFirstTwo = shopArticlesLastThree.splice(0,2);

console.log(shopArticlesFirstTwo);


//  Homework 10. //


// 1.
const concatingTwoArrrays = shopArticlesFirstTwo.concat(shopArticlesLastThree);

console.log(concatingTwoArrrays);

// 2.

const oranges = shopArticles.find(oranges => oranges.name === `Oranges`);

console.log(`Oranges`,oranges);

// 3.

const articlesIndex = shopArticles.findIndex(price => price.price === 100);

console.log(articlesIndex);

// 4.

shopArticles.forEach(price => price.formatedPrice = `$ ${price.price}`);

console.log(shopArticles);

// 5.

const allPrices = shopArticles
    .map(prices => prices.price)
    .flat()

console.log(allPrices);

// 6.

const ifThereIsSeven = allPrices.includes(7) 
? `The price 7 exists`
: `The price 7 doesn't exist`;

console.log(ifThereIsSeven);

// 7. 

const taxPrices = [];

allPrices.forEach((price , position) => {
    const itemPrice = {
        number: position+1,
        price: price * (1+0.08).toFixed(2)
    }
    taxPrices.push(itemPrice);
})

console.log(taxPrices);



// Homework 11 //

//  1. i 2.

const clothes = [
{
    id: 1,
    name: 'T-shirt',
    price: 20.00,
    colors: ['blue', 'black', 'white'],
    sizes: ['S', 'M', 'L']},
{
    id: 2,
    name: 'Pants',
    price: 40.00,
    colors: ['gray', 'black', 'white'],
    sizes: ['XL', 'M', 'L']
},
{
    id: 3,
    name: 'Hat',
    price: 12.5,
    colors: ['black', 'gray', 'white'],
    sizes: ['S', 'M']
},
{
    id: 4,
    name: 'Socks',
    price: 7.5,
    colors: ['red', 'black', 'white'],
    sizes: ['S', 'M', 'L', 'XL']
},
{
id: 5,
    name: 'Hoodie',
    price: 25.00,
    colors: ['blue', 'black', 'white', 'yellow'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
},
]

// 3. 
// const enteredIds = prompt('Enter up to 3 clothes items'); // 2,3,4

// // 4.
// const basket = [];
// const chosenIds = enteredIds
// .split(',')
// .map(id => +id);

// console.log(chosenIds);

// for(let id of chosenIds) {
// for(let item of clothes) {
//     if(item.id === id) {
//         basket.push(item);
//     }
// }
// }

// console.log(`Chosen products are:`, basket);
// // basket.forEach(item => console.log(item));


// // 5.

// // basket.pop();
// basket.splice(-1, 1);
// console.log(basket);

// const newProductID = prompt('Enter another product ID:');

// const newProduct = clothes.find(product => +newProductID === product.id);

// basket.push(newProduct);

// console.log(basket);


// // 6.

// let totalPrices = clothes
// .map(prices => prices.price)
// .flat()
// .reduce((pVal , cVal) => pVal + cVal);

// console.log(`Total price is $ ${totalPrices}`);

// 7. 

// let discountPrice = 0.1;

// totalPrices -= totalPrices * discountPrice;


// console.log(`Total price with discount is ${totalPrices} $`);

// 8.

clothes.sort((a,b)=>{
    if(a.price<b.price){
    return 1;
} 
    else if(a.price===b.price){
    return 0;
}
    else{
    return -1;
}
})

console.log(clothes);

// 9.

let allSizes = clothes
.map(size => size.sizes)
.flat(1)

console.log(allSizes);

// 10.

let filterSizes = allSizes.filter((sizes, index , allSizes)=>{
    return allSizes.indexOf(sizes) === index;
}
)
console.log(filterSizes);


// Homework 11.0.2 // 

// 1. 

let newArray =(array) => {
    let copyArray = [...array];
    return copyArray;
}

console.log(`Cloned array`,newArray([33,21,35,2,11,964]));


// 2.

let lastArray =(lastArrays) =>{
    return lastArrays[lastArrays.length-1];;
}

console.log(`Last element in array`,lastArray([`Mat`,`Tom`,`David`]));

// 3.

let secondArray =(thisArray) =>{
    return thisArray.join(``);
}

console.log(`All elements to string`,secondArray([1,2,3,4,`David`,`Milan`]))

// 4.

const evenOrOddArray = (evenOrOdd) => {
    evenOrOdd.forEach((number)=>{
    if(number % 2 === 0 && number !==0){
        console.log(`${number} is even.`);
    }
    else if( number % 2 !== 0){
        console.log(`${number} is odd.`);
    } else {
        console.log(`${number} is zero.`);
    } 
});
}

evenOrOddArray([5,2,3,6,10,55,33,0]);

// 5.

let fifthArray = [5,6,7,10,55];

let fifthArraystring = [`Joe`,`Milan`,`John`,`Smithy`,`Angelina`];

const fifthArrayFn = fifthArray.sort((a,b)=>{
    if(a>b){
    return 1;
}
    else if(a===b){
        return 0;
    }
    else{
        return -1
    }
});

console.log(fifthArrayFn);

const fifthArrayFnc = fifthArraystring.sort((a,b)=>{
    if(a.length>b.length){
    return 1;
}
    else if(a.length===b.length){
        return 0;
}
    else{
        return -1
};
});

console.log(fifthArrayFnc);

// const sortAscFunc = (array) => {
// if(array.every(element => typeof element === 'string')) {
//     return array.sort((x,y)=> x.length-y.length);
// } else {
//     return array.sort((x,y) => x-y);
// }
// }

// console.log(sortAscFunc([1,5,7,12,9,8,4,6]));

// console.log(sortAscFunc(['Avocado', 'Az Alkmar', 'Yogurt', 'Bannanas', 'Milk', 'Cereals']));

// 6.
const arrayElement = (array)=>{
array.forEach((a,i)=>{
    console.log(`Array ${i+1} contains these elements: ${a}.`);
})}

arrayElement([[1,3,5,6,7], [`Marija`,`Andjela`,`Marina`]]);


// const extractSubArraysFunc = (array) => {
//    array.forEach((arr, idx) => {
//        console.log(`Array ${idx+1} contains these elements:`);
//        arr.forEach(element => console.log(element));
//    })
// }

// extractSubArraysFunc([[1,4,5], ['test', 22, 33], [88, 99, 'hello']]);

// 7.

const totalItems = (allElements) =>{
    if(allElements.every(type => typeof type ===`number`)){
const sum = allElements.reduce((pVal , cVal)=> pVal + cVal);
const products = allElements.reduce((pVal , cVal)=> pVal + cVal);
console.log(`Total sum is ${sum+products}. `);
    }
else {
    console.log(`Each element in array has to be a number.`)
}
}
totalItems([1,2,3,5,6,7,8,`milan`]);

// 8.

