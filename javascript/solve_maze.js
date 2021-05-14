// todo
// - deep copying
// - use heuristic

const maze = [
    1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,
    1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,
    1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,
    1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,
    1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,
    1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,
    1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,
    1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,
    1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,
    1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,
    1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,
    1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,
    1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,
    1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,
    1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,
    1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,
    1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]

const size = 21;

// const seen = Array(size * size).fill(0); // debug

const solve_maze = (
    startx, starty, goalx, goaly,
    x = startx,
    y = starty,
    path = Array(size * size).fill(0)
) => {

    if (x < 0 || x >= size || y < 0 || y >= size ||
        maze[x + y * size] === 1 || path[x + y * size] === 1) {
        return false;
    }

    if (x === goalx && y === goaly) {
        path[x + y * size] = 1;
        return path;
    };

    // seen[x + y * size] = 1; // debug

    let newPath = [...path];
    newPath[x + y * size] = 1;

    return  solve_maze(startx, starty, goalx, goaly, x + 1, y, newPath) ||
            solve_maze(startx, starty, goalx, goaly, x - 1, y, newPath) ||
            solve_maze(startx, starty, goalx, goaly, x, y + 1, newPath) ||
            solve_maze(startx, starty, goalx, goaly, x, y - 1, newPath);

}

const path = solve_maze(1,0,20,19);

console.log("graph:");

let screen = Array(size * size).fill(0);

for (let i = 0; i < size * size; i++) {
    if (maze[i] === 1) screen[i] = 1;
}

// for (let i = 0; i < size * size; i++) {
//     if (seen[i] === 1) screen[i] = 2;
// }

for (let i = 0; i < size * size; i++) {
    if (path[i] === 1) screen[i] = 3;
}

for (let i = 0; i < size; i++) {

    console.log(
        screen.slice(i * size,i * size + size).map(e => {
            switch (e) {
                case 0: return " ";
                case 1: return "#";
                case 2: return "-";
                case 3: return "|";
            }
        }).join(" ")
    );

}

// vim: fdm=marker fmr=//^,//$
