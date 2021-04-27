function convertToRoman(num) {

    return 'I'
        .repeat(num)
        .replace(/IIIII/g, 'V')
        .replace(/VV/g, 'X')
        .replace(/XXXXX/g, 'L')
        .replace(/LL/g, 'C')
        .replace(/CCCCC/g, 'D')
        .replace(/DD/g, 'M')
        .replace(/VIIII/g, 'IX')
        .replace(/LXXXX/g, 'XC')
        .replace(/XXXX/g, 'XL')
        .replace(/DCCCC/g, 'CM')
        .replace(/CCCC/g, 'CD')
        .replace(/IIII/g, 'IV');

}

console.log("==== TESTS ====");
const qsAndAs = [
    {q: convertToRoman(2), a: "II"},
    {q: convertToRoman(3), a: "III"},
    {q: convertToRoman(4), a: "IV"},
    {q: convertToRoman(5), a: "V"},
    {q: convertToRoman(9), a: "IX"},
    {q: convertToRoman(12), a: "XII"},
    {q: convertToRoman(16), a: "XVI"},
    {q: convertToRoman(29), a: "XXIX"},
    {q: convertToRoman(44), a: "XLIV"},
    {q: convertToRoman(45), a: "XLV"},
    {q: convertToRoman(68), a: "LXVIII"},
    {q: convertToRoman(83), a: "LXXXIII"},
    {q: convertToRoman(97), a: "XCVII"},
    {q: convertToRoman(99), a: "XCIX"},
    {q: convertToRoman(400), a: "CD"},
    {q: convertToRoman(500), a: "D"},
    {q: convertToRoman(501), a: "DI"},
    {q: convertToRoman(649), a: "DCXLIX"},
    {q: convertToRoman(798), a: "DCCXCVIII"},
    {q: convertToRoman(891), a: "DCCCXCI"},
    {q: convertToRoman(1000), a: "M"},
    {q: convertToRoman(1004), a: "MIV"},
    {q: convertToRoman(1006), a: "MVI"},
    {q: convertToRoman(1023), a: "MXXIII"},
    {q: convertToRoman(2014), a: "MMXIV"},
    {q: convertToRoman(3999), a: "MMMCMXCIX"}
]

qsAndAs.forEach(({q,a}) => {
    let result = ""
    if (q === a) {
        result = "OOO PASS";
    } else {
        result = "XXX FAIL";
    }
    console.log(result + " result (" + q + ") should return " + a);
})
