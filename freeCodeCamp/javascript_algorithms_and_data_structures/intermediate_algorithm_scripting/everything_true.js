function truthCheck(collection, pre) {
    return collection.every(i => {
        return i.hasOwnProperty(pre) && Boolean(i[pre]);
    })
}

console.log(
    truthCheck([
        {"user": "Tinky-Winky", "sex": "male"},
        {"user": "Dipsy", "sex": "male"},
        {"user": "Laa-Laa", "sex": "female"},
        {"user": "Po", "sex": "male"}], "sex")
);

// let asdf = [
//     {"user": "Tinky-Winky", "sex": "male"},
//     {"user": "Dipsy", "sex": "male"},
//     {"user": "Laa-Laa", "sex": "female"},
//     {"user": "Po", "sex": "female"}
// ]
// console.log(Boolean(asdf[0].user));

