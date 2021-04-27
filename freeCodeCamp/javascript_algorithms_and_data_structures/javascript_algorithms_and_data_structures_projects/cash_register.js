const denomVal = { "ONE HUNDRED": 100.0, "FIFTY": 50.0, "TWENTY": 20.0, "TEN": 10.0, "FIVE": 5.0, "ONE": 1.0, "QUARTER": 0.25, "DIME": 0.10, "NICKEL": 0.05, "PENNY": 0.01 };

function checkCashRegister(price, cash, cid) {
    let due = cash - price;

    const cidSum = Math.round(cid // use Math.round to fix rounding error
      .map(([,b]) => b)
      .reduce((a,b) => a + b) * 100) / 100;

    if (cidSum < due) {
        return {
            "status": "INSUFFICIENT_FUNDS",
            "change": []
        };
    }

    if (cidSum === due) {
        return {
            "status": "CLOSED",
            "change": cid
        };
    }

    let change = cid
        .sort(() => -1)
        .map(([denom,]) => [denom,0])
        .map(([denom,]) => {

            let wanted = Math.floor(due / denomVal[denom]) * denomVal[denom];
            const [,avail] = cid.find(([x,]) => x === denom);
            wanted = (wanted < avail) ? wanted : avail;
            due -= wanted;
            due = Math.round(due * 100) / 100; // use Math.round to fix rounding error

            return [
                denom,
                wanted
            ];

        }).filter(([,x]) => x > 0);


    if (due > 0) {
        return {
            "status": "INSUFFICIENT_FUNDS",
            "change": []
        };
    } else {
        return {
            "status": "OPEN",
            "change": change
        };
    }
}

console.log("=== tests ======================================================");

const qa = [
    // {q: checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), a: {status: "OPEN", change: [["QUARTER", 0.5]]}},
    {q: checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), a: {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}},
    // {q: checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
    // {q: checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}}
    // {q: checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
]

qa.forEach(({q,a}) => {
    // console.log(q)
    console.log(a)
})

// vim: fdm=marker fmr=//^,//$
