#include <stdio.h>
#include <stdlib.h>

int main()
{
    int var1;
    int var2;


    printf("Ingrese el primer numero: ");
    scanf("%i", &var1);

    printf("Ingrese el segundo numero: ");
    scanf("%i", &var2);

    if (var1>var2)
    {
        printf("El numero más grande es: %i", var1);
    }

    else
    {
        printf("El numero más grande es: %i", var2);
    }



    return 0;
}
