#include <stdio.h>
#include <stdlib.h>

int Reto2_main()
{
    float pi ;
    float Diametro;
    float Altura;


    printf("Ingrese el valor del diametro: ");
    scanf("%f",&Diametro);

    printf("Ingrese el valor de la altura: ");
    scanf("%f",&Altura);

    float Area = pi*Diametro*Altura;

    printf("El valor del area del cilindro es: %f", Area);

    return 0;
}
