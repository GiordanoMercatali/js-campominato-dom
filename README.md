# Exercise

When the user will press a button, the program will generate a squared grid.
Every cell will have a number starting from 1 and scaling linearly.
Whenever the user will click on a cell, it'll become blue and a console message containing the number in it will be print.
There are 3 modes:
1. Easy --> 1 to 100;
2. Medium --> 1 to 81;
3. Hard --> 1 to 49.

## Solution
### Info

1. The user has to press the button;
2. The grid is squared;
3. There are 100 / 81 / 49 numbers in it _(based on difficulty)_;
4. Has 10 / 9 / 7 rows _(based on difficulty)_ containing 10 / 9 / 7 cells each;
5. The cell must become blue and print its value on click.

### Procedure

1. For loop to insert numbers in order;
2. Function to generate cells containing a number;
3. Create the button that starts the game and the defficulty selector;
4. Function that prints the number and changes color.

### Output

Print the grid with all numbers and cells that can be clicked.