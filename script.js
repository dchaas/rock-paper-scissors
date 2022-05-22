console.log("Hello World");

const OPTIONS = ['rock','paper','scissors'];

function computerPlayer() {
    let random = Math.floor(Math.random()*3);
    return OPTIONS[random];
}
