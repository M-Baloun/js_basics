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
    setTimeout(callback, time)
}

timer(() => console.log("Hello, World!"), 1000)



function timer2(callback, time) {
    setTimeout(callback, time)
}

timer2(function () {
    console.log("Hello, World!")
}, 1000)





document.addEventListener("DOMContentLoaded", () => {
    const divX = document.getElementById("insert-here");

    console.log( divX)
})


const divX = document.getElementById("insert-here");


let counter = 0;

const divX = () => {
        return document.getElementById("insert-here");
}


document.addEventListener("DOMContentLoaded", () => {

    for (let i = 0; i < 3; i++) {

        divX.innerHTML += '<div>Ahoj' + (i + 2)+ '</div>';
        //divX.innerHTML = divX.innerHTML + '<div>Ahoj + ' + (i + 2)+ '</div>'; toto radši ne
    }

    const clickMeBtn = document.getElementById("click-me");
    clickMeBtn.addEventListener("click", insert)
})

const insert = () => {
    divX().innerHTML += '<div>Ahoj + ' + counter++ + '</div>';
}

**HTML k js


<div class="flex">
    <div>Col 1</div>
    <div>Col 2</div>
    <div>Col 3</div>
    <div>Col 4</div>
</div>



<button onclick="insert()">Add</button>
<button id="click-me">Add2</button>
<div id="insert-here"></div>

*/
/*
document.addEventListener("DOMContentLoaded", () => {
    const square = document.getElementById("square");
    const toggleButton = document.getElementById("toggle");

    toggleButton.addEventListener("click", () => {
        square.classList.toggle("active");
    });

});
*/
/*
document.addEventListener("DOMContentLoaded", () => {
    const x = undefined;

    let a = x ??10;

})

 */
document.addEventListener("DOMContentLoaded", () => {

    const bounce = document.getElementById("bounce");
    let size = 10
    let maxSize = 200
    let minSize = 10
    let growing = true

    function SizeAdd() {
        if (size >= maxSize) {
            growing = false
        }
        else if (size <= minSize) {
            growing = true
        }
        size += growing ? 6 : -7
        bounce.style.fontSize = size + "px"
}

setInterval(SizeAdd, 100)
})
