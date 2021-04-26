function translatePigLatin(str) {
    let newStr = str.toLowerCase()
    if (/^[aeiou]/.test(newStr)) {
        newStr = newStr.concat("way")
    } else {
        newStr = newStr.replace(/(^[^aeiou]+)(.*)/,"$2$1").concat("ay")
    }
    return newStr
}

console.log(
translatePigLatin("twisted")
// translatePigLatin("apple")
// translatePigLatin("string")
);

