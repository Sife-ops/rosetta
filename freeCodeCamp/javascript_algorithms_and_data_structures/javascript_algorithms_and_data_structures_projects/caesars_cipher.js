function rot13 (str)  {
    return str
        .split(" ")
        .map(i => i
            .replace(/\w/g, a => String
                .fromCharCode(65 + (a.charCodeAt(0) - 65 + 13) % 26)))
        .join(" ")
}

console.log("=== tests ===");

const qsAndAs = [
    {q: rot13("SERR PBQR PNZC"), a: "FREE CODE CAMP"},
    {q: rot13("SERR CVMMN!"), a: "FREE PIZZA!"},
    {q: rot13("SERR YBIR?"), a: "FREE LOVE?"},
    {q: rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."), a: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."}
]

qsAndAs.forEach(({q,a}) => {
    let result
    if (q === a) {
        result = "OOO PASS";
    } else {
        result = "XXX FAIL";
    }
    console.log(result + " | " + q + " | " + a);

})
