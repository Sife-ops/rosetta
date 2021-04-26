function smallestCommons(arr) {
    let sorted = arr.sort((a,b) => a - b)
    let range = [];
    for (let i = sorted[0]; i <= sorted[1]; i++) {
        range.push(i)
    }

    let lcm = 1
    while (!range.every(i => lcm % i === 0)) {
        lcm++
    }
    return lcm
}


console.log(
// smallestCommons([1,5])
smallestCommons([23,18])
);

