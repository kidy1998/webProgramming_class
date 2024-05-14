let txt = "helloworld";
console.log("txt.length : ",    txt.length);

let slice = txt.slice(5,10);
console.log("slice : ", slice);


let str = "this is 2nd session of js lab lecture";

console.log(str.indexOf("session"));
console.log(str.lastIndexOf("this"));


console.log(str.includes("this"));


// let a = 456;
// let b = a.toString();
// console.log(typeof(b));

// console.log(a.toExponential(2));

// let d = "456";
// console.log(typeof(Number(b)) );


// if(str.includes("js")) {
//     console.log("str includes js");
// }else {
//     console.log("str does not includes js");
// }

// let cars = ["BMW", "BENZ", "AUDI"];
// let updateCars = [];

// for(let i=0; i<cars.length; i++) {
//     updateCars.push(cars[i]);
// }

// console.log("updateCars : ", updateCars);


// // let d = new Date();
// // console.log(d.getFullYear);


// console.log( Math.floor(Math.random() + 1 ) );


let mystring = 'first line \n second line';
let mystringliteral = `first line
 second line`; 

let headingElement = `<div>
                        <h1> Web programming </h1>
                     </div>`
 
let tempDiv = document.createElement('div');
tempDiv.innerHTML = headingElement;

document.body.appendChild(tempDiv.firstChild);


let value = 3
let exponent = 'second'

let result = value + ' to the ' +  exponent + ' equals ' +  (value * value)
console.log(result)

let interpolatedResult = `${value} to the ${exponent} equals ${value * value}`
console.log(interpolatedResult) 


let num1 = 20;
let num2 = 30;
let maxNum = (num1 > num2 ) ? num1 : num2;
console.log(maxNum);

let firstName = "jack", secondName = "asdasd", thirdName = "asdads";

let scoreArray = [100, 80, 90];

for (var score in scoreArray ) {
    console.log(score);   // key(index) 출력 : 0,1,2
}

for (var score of scoreArray ) {
    console.log(score);  // value 출력 : 100, 80, 90
}


with(location) {
    let hostName = location.hostname;
    let url = href;
    console.log(url);
}

let values = [0,1,5,10,15];
console.log(values.sort());

let testArray = [1,2,3];
console.log(testArray.sort((a,b) => a - b)); // 오름차순
console.log(testArray.sort((a,b) => b - a)); // 내림차순

let numbers = [1,2,3,4,5,6,7,8,9,10];

let everything = numbers.every((item, index, array) => item > 2);
console.log(everything);

let something = numbers.some((item, index, array) => item > 2);
console.log(something);


let mappedItems = numbers.map((item,index, array ) => item * 2);
console.log(mappedItems);


let people = [
    {name : 'Alice', age : 25}
]


let poepleWithInfo = people.map((person, index, arrray)  => {

    let {name ,age} = person;
    let isAdult = age >= 18;

    return{
        name,
        age,
        isAdult
    }

})


console.log(poepleWithInfo);





let filter_list = ([1,2,'a','b']);

let filter = filter_list => {
    let newIndex = [];

    for(var i = 0; i < filter_list.length(); i++){

        if(typeof(filter_list[i]) == 'number'){
            newIndex.push(i);
        }

    }
   
    return newIndex;
    
    
}

console.log(filter);    