function checkCashRegister(price, cash, cid) {
    const cidSum = cid
        .map(i => i[1])
        .reduce((a,b) => a + b)

    if (cidSum < cash - price) {
        return {
            "status": "INSUFFICIENT_FUNDS",
            "change": []
        }
    }

    if (cidSum == cash - price) {
        return {
            "status": "CLOSED",
            "change": cid
        }
    }

    let change = [
        ["ONE HUNDRED", 0],
        ["TWENTY", 0],
        ["TEN", 0],
        ["FIVE", 0],
        ["ONE", 0],
        ["QUARTER", 0],
        ["DIME", 0],
        ["NICKEL", 0],
        ["PENNY", 0],
    ]

    let tmp = cash - price
    change = change.map(([denom,]) => {

        let val
        switch (denom) {
            case "ONE HUNDRED":
                val = 100
                break
            case "FIFTY":
                val = 50
                break
            case "TWENTY":
                val = 20
                break
            case "TEN":
                val = 10
                break
            case "FIVE":
                val = 5
                break
            case "ONE":
                val = 1
                break
            case "QUARTER":
                val = 0.25
                break
            case "DIME":
                val = 0.10
                break
            case "NICKEL":
                val = 0.05
                break
            case "PENNY":
                val = 0.01
                break
        }

        let avail = cid.filter(i => i[0] === denom)[0][1]
        let wanted = Math.floor(tmp / val) * val
        wanted = (wanted < avail) ? wanted : avail
        tmp -= wanted

        return [
            denom,
            wanted
        ]
    }).filter(([,amt]) => amt > 0)

    if (tmp > 0) {
        return {
            status: "INSUFFICIENT_FUNDS",
            change: []
        }
    } else {
        return {
            status: (price < cidSum) ? "OPEN" : "CLOSED",
            change: change
        }
    }
}

console.log("===== tests ====="); //^
const qsAndAs = [

    {q: checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), a: {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}}

    // {q: checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), a: {status: "OPEN", change: [["QUARTER", 0.5]]}},

    // {q: checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), a: {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}},

    // {q: checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), a: {status: "INSUFFICIENT_FUNDS", change: []}},

    // {q: checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), a: {status: "INSUFFICIENT_FUNDS", change: []}},

    // {q: checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), a: {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}},

]

qsAndAs.forEach(({q,a}) => {

    console.log(a);

    // if (q === a) {
    //     result = "OOO PASS"
    // } else {
    //     result = "XXX FAIL"
    // }
    // console.log(result + " | " + q + " | " + a);

})
//$

// vim: fdm=marker fmr=//^,//$
