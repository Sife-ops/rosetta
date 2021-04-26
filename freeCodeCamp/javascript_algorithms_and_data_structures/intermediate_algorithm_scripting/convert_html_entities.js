function convertHTML(str) {
    let re = /&|<|>|\"|\'/g
    return str.replace(re, i => {
        switch (i) {
            case "&":
                return "&amp;"
            case "<":
                return "&lt;"
            case ">":
                return "&gt;"
            case "\"":
                return "&quot;"
            case "\'":
                return "&apos;"
        }
  })
}

console.log(
// convertHTML("Dolce & Gabana")
// convertHTML("Dolce '&' Gabana")
convertHTML("Schindler's List")
// convertHTML("Do \" lce & G'ab < bana")
);

