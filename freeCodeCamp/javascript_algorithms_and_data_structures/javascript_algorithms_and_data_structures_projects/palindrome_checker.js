function palindrome(str) {
    let normStr = str.replace(/\W+/g,"")
        .toUpperCase()
        .replace(/_/g,"")

    let halfLen = Math.floor(normStr.length / 2);
    let firstHalf = normStr.slice(0,halfLen)
    let secondHalf = normStr
        .slice(halfLen)
        .split("")
        .sort(() => -1)
        .join("")
        .slice(0,halfLen)

    if (firstHalf === secondHalf) {
        return true
    } else {
        return false
    }
}

console.log("==== TESTS ====");
const qsAndAs = [
    {q:"eye",  a:true},
    {q:"_eye",  a:true},
    {q:"race car",  a:true},
    {q:"not a palindrome",  a:false},
    {q:"A man, a plan, a canal, Panama",  a:true},
    {q:"never odd or even",  a:true},
    {q:"nope",  a:false},
    {q:"almostomla",  a:false},
    {q:"My age is 0, 0 si ega ym.",  a:true},
    {q:"1 eye for of 1 eye.",  a:false},
    {q:"0_0 (: /-\\ :) 0-0",  a:true},
    {q:"five|\\_/|four",  a:false}
]

qsAndAs.forEach(({q,a}) => {
    let result = ""
    if (palindrome(q) === a) {
        result = "OOO PASS";
    } else {
        result = "XXX FAIL";
    }
    console.log(result + " " + q + " should return " + a);
})
