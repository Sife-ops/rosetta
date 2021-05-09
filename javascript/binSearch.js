const fib = [1,2,3,5,8];

// check exist
const binSearch = (a, v, l = 0, h = a.length) => {
    if (h < l) {
        return -1;
    }

    const mid = Math.floor((l + h) / 2);
    if (v < a[mid]) {
        return binSearch(a,v,l,mid - 1);
    } else
    if (v > a[mid]) {
        return binSearch(a,v,mid+1,h);
    } else {
    return mid;
    }
}

// no check exist
const binSearch_ = (a, v) => {
    const mid = Math.floor(a.length / 2);

    if (v < a[mid]) {
        return binSearch_(a.slice(0,mid), v);
    } else
    if (v > a[mid]) {
        return mid + binSearch_(a.slice(mid), v);
    } else {
        return mid;
    }
}

console.log(
    binSearch(fib,7)
    // binSearch_(fib,7)
);

