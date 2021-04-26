function sumFibs(num) {
    let fibSeq = [1];
    while (true) {
        if (fibSeq.length < 2) {
            fibSeq.push(1)
        } else {
            let fibNext = fibSeq[fibSeq.length - 1] +
                fibSeq[fibSeq.length - 2]
            if (fibNext <= num){
                fibSeq.push(fibNext)
            } else {
                break
            }
        }
    }
    return fibSeq.filter(i => i % 2 != 0).reduce((a,b) => a + b)
}

// // solution 1
// function sumFibs(num) {
//   let prevNumber = 0;
//   let currNumber = 1;
//   let result = 0;
//   while (currNumber <= num) {
//     if (currNumber % 2 !== 0) {
//       result += currNumber;
//     }
//     currNumber += prevNumber;
//     prevNumber = currNumber - prevNumber;
//   }
//   return result;
// }

// // solution 2
// function sumFibs(num) {
//   if (num <= 0) return 0;
//   const arrFib = [1, 1];
//   let nextFib = 0;
//   while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
//     arrFib.unshift(nextFib);
//   }
//   return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
// }

console.log(
sumFibs(75025)
);

