function steamrollArray(arr) {

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.prototype.isPrototypeOf(arr[i])) {
            newArr = newArr.concat(steamrollArray(arr[i]))
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr

}

console.log(
// steamrollArray([1, [2], [3, [[4]]]])
steamrollArray([1,2,[4,{},5,[8,"a",9],"g",6],3])
);

