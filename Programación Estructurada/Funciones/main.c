#include <stdio.h>
#include <stdlib.h>

int potencia(int a, int b)
{
    int res = b;
    for(int i=1; i<a; i++)
    {
        res = res*b;
    }
    return res;
}


int main()
{
    printf("Funcion potencia \n");
    int add = potencia(3,3);
    printf("El resultado es: %i", add);
}


