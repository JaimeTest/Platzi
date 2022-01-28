#include <stdio.h>
#include <stdlib.h>

int main()
{
    int var1 = 5;
    int numUsuario;


    printf("Adivina en que número estoy pensando?");
    scanf("%i", &numUsuario);

    if (numUsuario == var1)
        printf("Correcto! acertaste");

    else
        printf("Incorrecto, lo siento!");
    return 0;
}
