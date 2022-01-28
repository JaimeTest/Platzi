#include <stdio.h>
#include <stdlib.h>

int Reto1_main()
{
    int var1;
    int var2;
    int varAux;


    printf("Ingrese la primer variable: ");
    scanf("%i",&var1);

    printf("Ingrese la segunda variable: ");
    scanf("%i",&var2);

    varAux = var1;
    var1 = var2;
    var2 = varAux;

    printf("El valor de la variable 1 intercambiada es: %i \n", var1);
    printf("El valor de la variable 2 intercambiada es: %i \n", var2);


    return 0;
}
