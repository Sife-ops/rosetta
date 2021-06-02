#include "snake.h"

extern int *screen;
extern int screenx;
extern int screeny;

extern node *snake;
extern node *apple;

int msleep(long msec)
{
    struct timespec ts;
    int res;

    if (msec < 0)
    {
        errno = EINVAL;
        return -1;
    }

    ts.tv_sec = msec / 1000;
    ts.tv_nsec = (msec % 1000) * 1000000;

    do {
        res = nanosleep(&ts, &ts);
    } while (res && errno == EINTR);

    return res;
}

long random_at_most(long max) {
    unsigned long
    num_bins = (unsigned long) max + 1,
    num_rand = (unsigned long) RAND_MAX + 1,
    bin_size = num_rand / num_bins,
    defect   = num_rand % num_bins;
    long x;
    do {
        x = random();
    }
    while (num_rand - defect <= (unsigned long)x);
    return x/bin_size;
}

void growSnake (int x, int y) {
    node *newHead = (node*)malloc(sizeof(node));
    newHead->x = x;
    newHead->y = y;
    newHead->prev = snake;
    snake = newHead;
}

void newFood (int x, int y) {
    if (apple != NULL)
        free(apple);
    apple = (node*)malloc(sizeof(node));
    apple->x = x;
    apple->y = y;
    apple->prev = NULL;
}

void cutTail (void) {
    node *curNode = snake;
    node *lastNode = curNode;

    while (curNode->prev != NULL) {
        lastNode = curNode;
        curNode = curNode->prev;
    }

    free(curNode);
    lastNode->prev = NULL;
}

void renderFood (void) {
    screen[apple->y * screenx + apple->x] = 2;
}

void renderSnake (void) {
    node *curNode = snake;
    while (curNode != NULL) {
        screen[curNode->y * screenx + curNode->x] = 1;
        curNode = curNode->prev;
    }
}

int inSnake(int x, int y) {
    node *curNode = snake;
    while (curNode != NULL) {
        if (curNode->x == x &&
            curNode->y == y) {
            return 1;
        } else {
            curNode = curNode->prev;
        }
    }
    return 0;
}

void randomFood (void) {
    for (;;) {
        int x = random_at_most(screenx - 1);
        int y = random_at_most(screeny - 1);
        if (inSnake(x, y)) {
            continue;
        } else {
            newFood(x,y);
            break;
        }
    }
}
