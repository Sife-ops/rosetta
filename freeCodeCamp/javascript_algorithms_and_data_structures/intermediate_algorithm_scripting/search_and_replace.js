function myReplace(str, before, after) {
    let beforeLc = before.toLowerCase()
    let afterLc = after.toLowerCase()
    let beforeUc = beforeLc[0].toUpperCase().concat(before.slice(1,before.length));
    let afterUc = afterLc[0].toUpperCase().concat(after.slice(1,after.length));

    let reLc = new RegExp(beforeLc, "g")
    let reUc = new RegExp(beforeUc, "g")

    let newStr = str.replace(reLc, afterLc)
    newStr = newStr.replace(reUc, afterUc)

    return newStr
}

console.log(
// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
myReplace("Let us get back to more Coding", "Coding", "algorithms")
);

