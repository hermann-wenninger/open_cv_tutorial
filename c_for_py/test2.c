#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>
int main()
{
    int int_number1, int_number2, itotal; /* storage areas for the int numbers */
    float float_number1, float_number2, ftotal; /* storage areas for the float numbers */
        /* ask the user to enter two integers */
    printf("Please enter an integer number:\n ");
    scanf("%d", &int_number1); 
    printf("You entered %d\n", int_number1);
    printf("Please enter another integer number: \n");
    scanf("%d", &int_number2); 
    printf("You entered %d\n", int_number2);
       
    itotal = int_number1 + int_number2; 
    printf("total is %d\n", itotal);
       
    printf("Please enter a float number:\n ");
    scanf("%f", &float_number1); 
    printf("You entered %f\n", float_number1);
    printf("Please enter another float number: \n");
    scanf("%f", &float_number2); 
    printf("You entered %f\n", float_number2);
      
    ftotal = float_number1 + float_number2; 
    printf("total is %f\n", ftotal);
    return 0;
    }