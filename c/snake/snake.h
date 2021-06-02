#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <errno.h>

typedef struct node {
    int x;
    int y;
    struct node *prev;
} node;

typedef enum {
    FALSE_ = 0,
    TRUE_,
} boolean;

typedef enum {
    NORTH = 0,
    SOUTH,
    EAST,
    WEST,
} card;

typedef enum {
    EMPTY = 0,
    SNAKE,
    APPLE,
} text;

int inSnake(int, int);
int msleep (long);
long random_at_most (long);
void cutTail (void);
void growSnake (int, int);
void newFood (int, int);
void randomFood (void);
void renderFood (void);
void renderSnake (void);
