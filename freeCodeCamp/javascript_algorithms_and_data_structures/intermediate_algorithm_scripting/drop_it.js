function dropElements(arr, func) {
    let newArr = [...arr]
    while (!func(newArr[0])) {
        newArr.shift();
    }
    return newArr
}

console.log(
// dropElements([1, 2, 3], function(n) {return n < 3; })
// dropElements([1, 2, 3,4], function(n) {return n >= 3; })
dropElements([0,1,0,1], function(n) {return n === 1; })
);

