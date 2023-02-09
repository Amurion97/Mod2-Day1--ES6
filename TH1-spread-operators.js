let car1 = {
    brand: "Giang",
    color: "Red",
    key: 123
}
let car2 = {
    brand: "Hung",
    color: "Blue",
    owner: "Dang"
}
let car3 = {...car1, ...car2};
console.log(car3);
let num = [1,2,3,4]
const square_6 = num.map( function (n) {
    console.log("n= ",n)
    return n * n;
});
console.log(square_6);