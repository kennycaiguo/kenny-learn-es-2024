let div = document.querySelector("div")
console.log(div);

function func1() {
    console.log("inside 1.js func1...");
}
function func2() {
    console.log("inside func2...");
}

function test() {
    console.log("1.js---test method");
}

export default {
    func1,
    func2,
    test
}