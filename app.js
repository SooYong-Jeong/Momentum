const age = parseInt(prompt("How old?"));
console.log(typeof age);

if (isNaN(age)) {
    console.log("pls write number");
}
else if(age < 18){
    console.log("can`t drink");
}
else {
    console.log("ok");
}