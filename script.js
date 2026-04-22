// function SayName () {
//     console.log("Mening ismim Aziz");
// }
// SayName()

// Function 1-declarition 2-expresseion 3-arrow

// function calculate(a, b){
//     console.log(a + b);
// }
// calculate(3, 5)

// function userName(name){
//     console.log("Salom" + name);    
// }
// userName("Aziz");

// const calculate = function(a, b){
//     // console.log(a + b);
//     return a + b;
// }
// console.log(calculate(2, 4));

function userText(){
    alert("SALOM")
}

function userText1(){
    console.log("SALOM");
}

const name = prompt("Ism kiriting");
const age = +prompt("Yosh kiriting");
function userName(name, age){
    console.log("Salom" + " " + name);
    switch (age) {
        case 14:
            age(14 + 36)
            alert(age)
            break;
        case 9:
            age(9 + 41)
            alert(age)
            break;
        case 13:
            age(13 + 37)
            alert(age)
            break;
        case 11:
            age(11 + 39)
            alert(age)
            break;
        case 12:
            age(12 + 38)
            alert(age)
            break;
        case 16:
            age(16 + 34)
            alert(age)
            break;
        case 15:
            age(15 + 35)
            alert(age)
            break;
        case 17:
            age(17 + 33)
            alert(age)
            break;
        default:
            alert("Siz notogri yosh tertingiz")
            break;
    }
}
userName(name)
