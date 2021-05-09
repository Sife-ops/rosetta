const [PLAYER,WALL,GOAL] = [1,2,3];
const [T,F] = [true,false];

Array.prototype.coordOf = function(arg) {
    const ind = board.indexOf(arg);
    if (ind < 0) {
        return null;
    }
    const y = Math.floor(ind / 8);
    const x = ind - y * 8;
    return [x,y];
}

function man(x1,y1,x2,y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

function euc(x1,y1,x2,y2) {
    let a = Math.pow(Math.abs(x1 - x2), 2);
    let b = Math.pow(Math.abs(y1 - y2), 2);
    return Math.sqrt(a + b);
}

function travel (b, s, x,y, gx,gy) {
    if (x === gx && y === gy) {

        //^ debug

        console.log("=====");

        let screen = b.slice();
        for (let i = 0; i < screen.length; i++) {
            if (s[i] === true) {
                screen[i] = 2;
            }
        }

        for (let i = 0; i < 8; i++) {
            console.log(
                screen
                    .slice(i * 8, (i + 1) * 8)
                    .map(x => {
                        switch (x) {
                            case 0:
                                return "- ";
                            case 1:
                                return "# ";
                            case 2:
                                return "X ";
                        }
                    }
                    ).join("")
            );
        }

        //$

        return s;
    }

    if (b[x + y * 8] === 1) return false;
    if (s[x + y * 8] === true) return false;
    if (x < 0 || x >= 8 || y < 0 || y >= 8) return false;

    ns = s.slice();
    ns[x + y * 8] = true;

    const closest = [
        [x + 1,y],
        [x - 1,y],
        [x,y + 1],
        [x,y - 1]
    ].sort((a,b) => {
        return  euc(...a,gx,gy) -
                euc(...b,gx,gy);
    });

    return  travel(b, ns, ...closest[0], gx, gy) ||
            travel(b, ns, ...closest[1], gx, gy) ||
            travel(b, ns, ...closest[2], gx, gy) ||
            travel(b, ns, ...closest[3], gx, gy) ||
            false;

}

let seen = Array(8 * 8).fill(false);

const board = [
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,
    0,0,0,1,1,1,0,0,
    0,0,0,0,0,1,0,0,
    0,0,1,0,0,1,0,0,
    0,0,1,0,0,1,0,0,
    0,0,1,1,1,1,0,0,
    0,0,0,0,0,0,0,0
]

const edges = {

}

// travel(board, seen, 1,2, 6,5)
travel(board, seen, 0,0, 7,7)

// vim: fdm=marker fmr=//^,//$
