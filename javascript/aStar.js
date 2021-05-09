// todo
// filter out neighbor nodes as base cases
//     return an or expression of recursing the four best nodes
//     do validity checking in the base cases.
// show final cost in a better display
// use non mutating operations

function man(x1,y1,x2,y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

function euc(x1,y1,x2,y2) {
    let a = Math.pow(Math.abs(x1 - x2), 2);
    let b = Math.pow(Math.abs(y1 - y2), 2);
    return Math.sqrt(a + b);
}

function aStar (
    b,
    sx, sy,
    gx, gy,
    o = Array(8 * 8).fill(null),
    c = Array(8 * 8).fill(null),
    cur = {
        "coord": [sx,sy],
        "distance": 0,
        "heuristic": euc(sx,sy,gx,gy),
        // "heuristic": man(sx,sy,gx,gy),
        "previous": null
    },
    // stop = 5
) {

    let [x, y] = [...cur.coord];

    // base cases
    if (x === gx && y === gy) {

        //^ output

        console.log("finished:");
        let screen = Array(8 * 8).fill(0);
        for (let i = 0; i < screen.length; i++) {
            if (b[i] === 1) screen[i] =         1; // show walls
            if (i === x + y * 8) screen[i] =    2; // show player
            if (c[i] !== null) screen[i] =      3; // show closed
            // if (o[i] !== null) screen[i] =      4; // show open
        }
        for (let i = 0; i < 8; i++) {
            console.log(
                screen.slice(i * 8, (i + 1) * 8)
                    .map(e => {
                        switch (e) {
                            case 0:
                                return "- ";
                            case 1:
                                return "# ";
                            case 2:
                                return "X ";
                            case 3:
                                return "* ";
                            case 4:
                                return "o ";
                        }
                    })
                    .join("")
            );
        }

        c.filter(e => e !== null)
            .forEach(e => {
                console.log(
                    "coord " +
                    e.coord +
                    ", distance: " +
                    e.distance +
                    ", previous: " +
                    e.previous
                );
            });

        //$

        return true;
    }

    const neighbors = [
        [x + 1, y],
        [x - 1, y],
        [x, y + 1],
        [x, y - 1],
        [x + 1, y + 1],
        [x + 1, y - 1],
        [x - 1, y + 1],
        [x - 1, y - 1],
    ].filter(([x,y]) => x >= 0 && x < 8 &&
                        y >= 0 && y < 8)
    .filter(([x,y]) => c[x + y * 8] === null)

    ////^ debug ===================================================

    //console.log("+++++++++++++++++++++++++++++++++++++++++++");

    //console.log("closed:");
    //console.log(c.filter(e => e !== null));
    //console.log("open:");
    //console.log(o.filter(e => e !== null));
    //console.log("current:");
    //console.log(cur);

    //console.log("graph:");
    //let screen = Array(8 * 8).fill(0);
    //for (let i = 0; i < screen.length; i++) {
    //    if (b[i] === 1) screen[i] =         1;
    //    if (i === x + y * 8) screen[i] =    2;
    //    if (c[i] !== null) screen[i] =      3;
    //    if (o[i] !== null) screen[i] =      4;
    //}
    //for (let i = 0; i < 8; i++) {
    //    console.log(
    //        screen.slice(i * 8, (i + 1) * 8)
    //            .map(e => {
    //                switch (e) {
    //                    case 0:
    //                        return "- ";
    //                    case 1:
    //                        return "# ";
    //                    case 2:
    //                        return "X ";
    //                    case 3:
    //                        return "* ";
    //                    case 4:
    //                        return "o ";
    //                }
    //            })
    //            .join("")
    //    );
    //}

    //if (stop <= 0) {
    //    console.log("max iterations");
    //    return true;
    //}
    ////$ debug ===================================================

    // update open list
    neighbors.forEach(([x,y]) => {
        o[x + y * 8] = {
            "coord": [x,y],
            "distance": cur.distance + (b[x + y * 8] === 1 ? 100 : 1),
            "heuristic": euc(x,y,gx,gy),
            // "heuristic": man(x,y,gx,gy),
            "previous": [...cur.coord]
        }
    });

    // add current node to closed
    c[x + y * 8] = cur;

    // chose highest ranked out of all the nodes as the next node
    cur = o
        .filter(e => e !== null)
        .sort((a, b) => {
            let fa = a.distance + a.heuristic;
            let fb = b.distance + b.heuristic;
            return fa - fb;
        })[0];
    [x, y] = [...cur.coord];

    // remove next node from open
    o[x + y * 8] = null;

    return aStar(
        b,
        sx,sy,
        gx,gy,
        o,c,
        cur,
        // stop - 1
    );

}

const board = [
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,
    0,0,0,1,1,1,0,0,
    0,0,0,0,0,1,0,0,
    0,0,1,0,0,1,0,0,
    0,0,1,0,0,1,0,0,
    0,0,1,1,1,1,0,0,
    0,0,0,0,0,0,0,0
];

const board2 = [
    0,0,1,0,0,0,0,0,
    0,0,1,0,0,0,0,0,
    0,0,1,0,1,1,0,0,
    0,0,1,0,0,1,0,0,
    0,0,1,0,0,1,0,0,
    0,0,1,1,0,1,0,0,
    0,0,0,0,0,1,0,0,
    0,0,0,0,0,1,0,0
];

aStar(board2, 0,0, 7,7);

// vim: fdm=marker fmr=//^,//$
