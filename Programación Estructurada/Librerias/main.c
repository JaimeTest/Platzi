#include <stdio.h>
#include <stdlib.h>
#include "operaciones.h"


int main()
{
    float firstValue = 10;
    float secondValue = 20;
    float result;
    int option;

    printf("Soy una calculadora \n");
    printf("Que operacion deseas realizar?: \n");

    printf("1. suma \n");
    printf("2. resta \n");
    printf("3. mult \n");
    printf("4. division \n");


    printf("Elija una opcion \n");

    scanf("%i", &option);

    switch (option)
    {
    case 1:
        result = addition(firstValue,secondValue);
        break;

    case 2:
        result = resta(firstValue,secondValue);
        break;

    case 3:
        result = multiplicacion(firstValue,secondValue);
        break;

    case 4:
        result = division(firstValue,secondValue);
        break;

     }
    printf("El resultado es: %f", result);

    return 0;
}
