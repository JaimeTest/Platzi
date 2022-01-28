#include <stdio.h>
#include <stdlib.h>

int main()
{

    int var1;

    printf("Estas en un bosque y puedes ir por uno de los tres caminos \n");
    printf("Escribe 1 si decides el primer camino \n");
    printf("Escribe 2 si decides el segundo camino \n");
    printf("Escribe 3 si decides el tercer camino \n");

    scanf("%i", &var1);

    switch (var1)
    {
    case 1:
        printf("Elegiste el camino donde te encuentras un rio");
        break;

    case 2:
        printf("Elegiste el camino donde te encuentras un oso");
        break;

    case 3:
        printf("Elegiste el camino donde encuentras la salida del bosque");
        break;

    default:
        printf("No elegiste un camino y te perdiste");
        break;
    }
    return 0;
}
