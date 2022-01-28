#include <stdio.h>
#include <stdlib.h>

int main()
{
    int num1 = 0;
    int num2 = 1;
    int sum;

    printf("Sucesión de fibunacci: \n");

    printf("Num 1: %i", num1);
    printf("\nNum 2: %i", num2);

    for (int i = 1; i<=7; i++)
    {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        int id = i + 2;
        printf("\nNum %i: %i", id,sum);
    }
    return 0;
}
