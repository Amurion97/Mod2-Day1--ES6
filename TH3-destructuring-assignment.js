let x = 2;
let y = 3;
[x, y] = [y,x];
console.log(x, y);

let car = {
    name: "Dog",
    owner: {
        name: "Giang"
    }
};
let {name: carName, owner: {name: ownerName}} = car;
console.log(carName, ownerName);