/*
let y = 20
const pi = 3.14159265359

let z = y +pi

y = 34
y = "ahoj"

console.log("Hello, World!")

const x = 12

console.log("Číslo: " + x)

alert("Číslo :" + x)

function test() {
    console.log("Test")
}

const test2 = () => {
    console.log("Test2")
}



console.log("Hello, World!");

let x = 12
console.log("Číslo: " + x)
console.log('Číslo: ' + x)
console.log(`Číslo: ${x}`)

console.info( "Hello, World!")
console.warn("Hello, World!")
console.error("Hello, World!")


*/

function getImage(url, xx, yyy) {
    console.log(url);
    console.log(xx);
    console.log(yyy);
}

const getImage2 = function (url, xx, yyy) {
    console.log(url);
    console.log(xx);
    console.log(yyy);
}
let getImage3 = function (url, xx, yyy) {
    console.log(url);
    console.log(xx);
    console.log(yyy);
}

const getImage4 = (url, xx, yyy) => {
    console.log(url);
    console.log(xx);
    console.log(yyy);
}

const getImage5 = (url) => console.log(url);

getImage("a", 1, 2);

getImage2("a", 1, 2);

getImage3("a", 1, 2);

getImage4("a", 1, 2);

getImage5("a");


const timer = (callback, time) => {
    setTimeout(callback(), time)
}

timer(() => console.log("Hello, World!"), 1000)



function timer2(callback, time) {
    setTimeout(callback(), time)
}

timer2(function () {
    console.log("Hello, World!")
}, 1000)


