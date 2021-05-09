// recursive
const factorial = n => {
    if (n < 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// minimalist
const fac = n => n < 1 ? 1 : n * fac(n - 1);

// iterative
const factorial_ = n => {
    if (n < 2) {
        return 1;
    }

    let a = n;
    for (let i = n - 1; i > 0; i--) {
        a *= i;
    }

    return a;

}

console.log(
    fac(5)
);

console.log(
    factorial(5)
);

console.log(
    factorial_(9)
);

