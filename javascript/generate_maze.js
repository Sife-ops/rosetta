// generate everything based on the "cell" map

function generate_maze(
    sizex,
    sizey,
    x = 1,
    y = 1,
    wallx = 1,
    wally = 0,
    visited = Array(sizex * sizey).fill(0),
    stop = null
) {

    // if (stop === 0) { //^
    //     return visited.map(i => {
    //         switch (i) {
    //             case 0: return 1;
    //             case 1: return 0;
    //         }
    //     })
    // } //$

    if (x < 1 || x >= sizex - 1 ||
        y < 1 || y >= sizey - 1 ||
        visited[x + y * sizex] === 1) {
        return false;
    }

    visited[x + y * sizex] = 1;
    visited[wallx + wally * sizex] = 1;

    // use slices
    if ((lambda = (n = 0) => {
        if (n >= visited.length)  return [];
        if ((n % sizex) % 2 > 0 &&
            (Math.floor(n / sizex)) % 2 > 0) {
            return lambda(n + 1).concat(visited[n]);
        }
        return lambda(n + 1);
    })().every(i => i === 1)) {
        visited[visited.length - 2] = 1;
        return visited.map(i => {
            switch (i) {
                case 0: return 1;
                case 1: return 0;
            }
        })
    }

    const neighbors = [
        [x + 2, y, x + 1, y],
        [x - 2, y, x - 1, y],
        [x, y + 2, x, y + 1],
        [x, y - 2, x, y - 1],
    ].sort(() => Math.random() * 2 - 1);

    return  generate_maze(sizex, sizey, ...neighbors[0], visited, stop - 1) ||
            generate_maze(sizex, sizey, ...neighbors[1], visited, stop - 1) ||
            generate_maze(sizex, sizey, ...neighbors[2], visited, stop - 1) ||
            generate_maze(sizex, sizey, ...neighbors[3], visited, stop - 1);

}

const maze = generate_maze(21,21);

for (let i = 0; i < 21; i++) {
    console.log(
        maze.slice(i * 21,i * 21 + 21).map(i => {
            switch (i) {
                case 0: return " ";
                case 1: return "#";
            }
        }).join(" ")
    );
}

// vim: fdm=marker fmr=//^,//$
