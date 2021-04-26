function pairElement(str) {
    return str.split("").map(e => {
        switch (e) {
            case "G":
                return ["G","C"]
            case "C":
                return ["C","G"]
            case "T":
                return ["T","A"]
            case "A":
                return ["A","T"]
        }
    })
}

console.log(
pairElement("CTCTA")
);

