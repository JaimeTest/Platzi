#include <stdio.h>
#include <stdlib.h>

int main()
{
    int rSum;
    float rRes;
    float rDiv;
    float rMult;
    int rMod;

    rSum = 5 + 3;
    rRes = 8 - 3;
    rDiv = 5.0 / 3.0;
    rMult = 7 * 3;
    rMod = 7%3;

    printf("El resultado de la suma es: %i \n", rSum);
    printf("El resultado de la resta es: %f \n", rRes);
    printf("El resultado de la division es: %f \n", rDiv);
    printf("El resultado de la multiplicacion es: %f \n", rMult);
    printf("El resultado del modulo es: %i \n", rMod);

    return 0;
}
