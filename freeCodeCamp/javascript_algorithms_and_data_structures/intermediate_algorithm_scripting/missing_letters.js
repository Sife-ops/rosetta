function fearNotLetter(str) {

    let strArr = str.split("")
    let abcArr = "abcdefghijklmnopqrstuvwxyz".split("")

    if (str == abcArr.join("")) return undefined

    let abcSubArr =
        abcArr.slice(abcArr.indexOf(strArr[0]),
                     abcArr.indexOf(strArr[strArr.length - 1]) + 1)

    return abcSubArr.filter(i => !strArr.some(j => i == j)).join("")
}

// solution
// function fearNotLetter(str) {
//   for (var i = 0; i < str.length; i++) {
//     var code = str.charCodeAt(i);
//     if (code !== str.charCodeAt(0) + i) {
//       return String.fromCharCode(code - 1);
//     }
//   }
//   return undefined;
// }

console.log(
// fearNotLetter("abce")
// fearNotLetter("stvwx")
// fearNotLetter("bcdf")
// fearNotLetter("abcdefghijklmnopqrstuvwxyz")
fearNotLetter("abcdefghjklmno")
);


