#include "snake.h"
#include <curses.h>

int screenx;
int screeny;
int *screen;

node *snake = NULL;
node *apple = NULL;

int main (int argc, char *argv[0]) {
    card dir = EAST;
    int c = 'd';

    int nextX;
    int nextY;

    initscr();
    cbreak();
    noecho();
    keypad(stdscr, 1);
    curs_set(0);
    timeout(80);
    getmaxyx(stdscr, screeny, screenx);
    screen = (int*)calloc(screenx * screeny, sizeof(int));

    growSnake(0,0);
    growSnake(1,0);

    srand(time(0));
    randomFood();

    for (;;) {

        // input
        c = getch();
        if        (c == 'w') {
            dir = NORTH;
        } else if (c == 'a') {
            dir = WEST;
        } else if (c == 's') {
            dir = SOUTH;
        } else if (c == 'd') {
            dir = EAST;
        }

        // dir condition
        if        (dir == NORTH) {
            nextX = snake->x;
            nextY = snake->y - 1;
        } else if (dir == SOUTH) {
            nextX = snake->x;
            nextY = snake->y + 1;
        } else if (dir == EAST) {
            nextX = snake->x + 1;
            nextY = snake->y;
        } else if (dir == WEST) {
            nextX = snake->x - 1;
            nextY = snake->y;
        }

        if (nextX < 0 || nextX >= screenx ||
            nextY < 0 || nextY >= screeny) {
            printf("game over\n");
            break;
        }

        if (nextX == apple->x &&
            nextY == apple->y) {
            randomFood();
        } else {
            cutTail();
        }

        if (inSnake(nextX, nextY)) {
            printf("game over\n");
            break;
        }

        /* // render */
        growSnake(nextX, nextY);
        renderSnake();
        renderFood();

        // draw
        for (int y = 0; y < screeny; y++) {
            for (int x = 0; x < screenx; x++) {
                switch (screen[y * screenx + x]) {
                    case EMPTY:
                        mvaddch(y, x, ' ');
                        break;
                    case SNAKE:
                        mvaddch(y, x, 'o');
                        break;
                    case APPLE:
                        mvaddch(y, x, '@');
                        break;
                }
            }
        }
        refresh();

        for (int i = 0; i < screenx * screeny; i++) {
            screen[i] = 0;
        }

        msleep(100);

    }

    return 0;
}
