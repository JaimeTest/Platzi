#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>


int main()
{
    int integerA;
    float floatA;
    char letterA;

    printf("Ingresa el valor del entero A: ");
    scanf("%i", &integerA);

    printf("Ingresa el valor del flotante A: ");
    scanf("%f", &floatA);

    printf("Ingresa el valor del caracter: ");
    scanf(" %c", &letterA);


    printf("El entero A es: %i \n", integerA);
    printf("El flotante A es: %f \n", floatA);
    printf("El caracter A es: %c", letterA);

    return 0;
}
