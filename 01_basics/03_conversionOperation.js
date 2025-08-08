let score = "55ad"

console.log(typeof score);
console.log(typeof(score));

let valueNumber = Number(score)

console.log(typeof valueNumber);
console.log(valueNumber);

// "55" => 55
// "55ad" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "fgj" => true

let someNumber = 56
let stringNumber = String(someNumber)

console.log(typeof stringNumber)
console.log(stringNumber)


// ************************Operations************************

let value = 3
let negValue = -value

console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = " dishant"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true);
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 =  2 + 2

let gameCounter = 100
gameCounter++                // search => prefix & postfix increment js mdn
                            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
console.log(gameCounter);

