function uniteUnique(...args) {
    let unique = [];
    args.forEach(i => {
        i.forEach(j => {
            if (!unique.some(k => k === j)) {
                unique.push(j)
            }
        })
    })
    return unique
}

console.log(
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
uniteUnique([1,2,3], [5,2, 1])
);


