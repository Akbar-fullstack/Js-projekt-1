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
