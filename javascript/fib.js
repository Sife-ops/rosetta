// recursive
const fib = n => {
    if (n < 0) {
        return -1;
    }

    if (n < 2) {
        return 1;
    }

    return fib(n - 1) + fib(n - 2);

}

// iterative
const fib_ = n => {
    if (n < 0) {
        return -1;
    }

    if (n < 2) {
        return 1;
    }

    let a = 1;
    let b = 1;

    for (let i = 1; i < n; i++) {
        const tmp = a + b;
        a = b;
        b = tmp;
    }

    return b;

}

console.log(
    fib(24)
    // fib_(24)
);

