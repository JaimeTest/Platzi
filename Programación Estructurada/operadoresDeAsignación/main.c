#include <stdio.h>
#include <stdlib.h>

int main()
{
    printf("Operadores de asignación \n");

    int value;

    value = 11;

    printf("El valor de la variable value es: %i \n", value);

    value += 1;

    printf("El valor de la variable value es: %i \n", value);

    value -= 3;

    printf("El valor de la variable value es: %i \n", value);

    value *= 4;

    printf("El valor de la variable value es: %i \n", value);

    value /= 2;

    printf("El valor de la variable value es: %i \n", value);

    value %= 3;

    printf("El valor de la variable value es: %i \n", value);


    return 0;
}
