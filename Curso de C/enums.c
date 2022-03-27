#include <stdio.h>

/*enum weekDays {Monday, Tuesday, Wednesday, Thusday, Friday, Saturday, Sunday};

int main ()
{

    enum weekDays today;
    today = Sunday;
    printf("Day %d", today+1);
    return 0;
}

*/

enum Values
{
    club = 0,
    diamods = 5,
    hearts = 10,
    spades = 15,
} card;


int main ()
{
    card = spades;
    printf("prueba %d", card);
    return 0;
}