function manhattan(x1,y1,x2,y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

function euclidian(x1,y1,x2,y2) {
    let a = Math.pow(Math.abs(x1 - x2), 2);
    let b = Math.pow(Math.abs(y1 - y2), 2);
    return Math.sqrt(a + b);
}

function aStar (board, startx, starty, goalx, goaly,
    open = Array(8 * 8).fill(null),
    closed = Array(8 * 8).fill(null),
    current = {
        "coord": [startx, starty],
        "distance": 0,
        "heuristic": manhattan(startx, starty, goalx, goaly),
        "previous": null
    }) {
    const [x, y] = [...current.coord];

    if (x === goalx && y === goaly) {
        closed[x + y * 8] = current;

        // console.log("graph:"); //^
        // let screen = Array(8 * 8).fill(0);
        // for (let i = 0; i < screen.length; i++) {
        //     if (board[i] === 1) screen[i] = 1; // show walls
        //     if (i === x + y * 8) screen[i] = 2; // show player
        //     if (closed[i] !== null) screen[i] = 3; // show closed
        //     if (open[i] !== null) screen[i] = 4; // show open
        // }
        // for (let i = 0; i < 8; i++) {
        //     console.log(
        //         screen.slice(i * 8, (i + 1) * 8)
        //             .map(e => {
        //                 switch (e) {
        //                     case 0:
        //                         return "- ";
        //                     case 1:
        //                         return "# ";
        //                     case 2:
        //                         return "X ";
        //                     case 3:
        //                         return "* ";
        //                     case 4:
        //                         return "o ";
        //                 }
        //             })
        //             .join("")
        //     );
        // } //$

        return (lambda = (closed, x, y, startx, starty) => {
            if (x === startx && y === starty) {
                return [[x, y]];
            }
            return lambda(closed, ...closed.filter(e => e !== null)
                .find(({coord: [nx, ny]}) => nx === x && ny === y )
                .previous, startx, starty).concat([[x,y]]);
        })(closed, x, y, startx, starty);
    }

    let newOpen = open.slice();
    [
        [x + 1, y + 1], [x - 1, y - 1], [x + 1, y], [x, y + 1],
        [x - 1, y + 1], [x + 1, y - 1], [x - 1, y], [x, y - 1]
    ].filter(([x,y]) => x >= 0 && x < 8 &&
                        y >= 0 && y < 8 &&
                        closed[x + y * 8] === null
    ).forEach(([x,y]) => {
        newOpen[x + y * 8] = {
            "coord": [x,y],
            "distance": current.distance + (board[x + y * 8] === 1 ? 100 : 1),
            "heuristic": manhattan(x, y, goalx, goaly),
            "previous": [...current.coord]
        };
    });

    let newClosed = closed.slice();
    newClosed[x + y * 8] = current;

    const [newCurrent,] = newOpen.filter(e => e !== null)
        .sort((a, b) => {
            return (a.distance + a.heuristic) - (b.distance + b.heuristic);
        });

    const [newx, newy] = [...newCurrent.coord];
    newOpen[newx + newy * 8] = null;

    return aStar(board, startx, starty, goalx, goaly,
        newOpen, newClosed, newCurrent);

}

const board = [
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,
    0,0,0,0,1,1,1,0,
    0,0,1,0,0,0,1,0,
    0,0,1,0,0,0,1,0,
    0,0,1,1,1,1,1,0,
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0
];

console.log(aStar(board, 0,0, 7,7));

// vim: fdm=marker fmr=//^,//$
