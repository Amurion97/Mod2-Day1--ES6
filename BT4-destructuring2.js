const myObjects = [
    {x:  10, y: 20, width: 30, height: 30},
    {x: -40, y: 20, width: 30, height: 30},
    {x:   0, y:  0, width: 10, height:  5}
]
let point = {x: 4, y: 2}
console.log(myObjects.find(function (rectangle) {
    // console.log(rectangle, this);
    let {x: pointX, y: pointY} = this;
    let {x: recX, y: recY, width: recWidth, height: recHeight} = rectangle;
    // console.log(pointX, pointY, recX, recY, recWidth, recHeight);
    return (pointX >= recX && pointX <= recX + recWidth
        && pointY >= recY && pointY <= recY + recHeight);
}, point))