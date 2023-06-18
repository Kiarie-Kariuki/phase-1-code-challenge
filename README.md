# phase-1-code-challenge

GRADE GENERATOR

The Grade Generator is a JavaScript program that calculates grades based on input marks. It assigns grades A, B, C, D, or E depending on the range in which the marks fall.


Usage

To use the Grade Generator, follow these steps:

Open the program in a JavaScript environment or a web browser console.

Execute the inputMarks() function.

Enter the marks when prompted. Make sure to input a valid numerical value between 0 and 100.

The program will then calculate the corresponding grade based on the input marks and display it in the console.



How It Works

The program consists of two functions: 

gradeGenerator(marks): This function takes the input marks as an argument and calculates the grade based on the following ranges:

Marks greater than 79: Grade A

Marks between 60 and 79 : Grade B

Marks between 50 and 59 : Grade C

Marks between 40 and 49 : Grade D

Marks below 40: Grade E

The function returns the calculated grade.

inputMarks(): This function prompts the user to enter marks and validates the input. It ensures that the input is a numerical value between 0 and 100. If the input is valid, it calls the gradeGenerator function 

to calculate and display the corresponding grade. Otherwise, it displays an error message indicating invalid input.
    
    
The Grade Generator is an open source program. Users are free to alter the code and program altogether to better suite their purporse.




SALARY CALCULATOR

The Salary Calculator is a JavaScript program that calculates various salary-related deductions and exemptions based on user inputs. It provides information such as gross salary, taxable salary, tax amount, 

exempted tax, total relief, NHIF (National Hospital Insurance Fund) deduction, NSSF (National Social Security Fund) deduction, total deductions, and net salary.

Usage

To use the Salary Calculator, follow these steps:

Open the program in a JavaScript environment or a web browser console.

Enter the required information when prompted:

Enter the salry amount.

Enter the period (1 for monthly salary, 12 for annual salary).

Specify whether you have a disability exemption certificate (true/false).

Enter the allowable owner-occupier interest.

Review the calculated values displayed in the console, including gross salary, taxable salary, tax amount, exempted tax, total relief, NHIF deduction, NSSF deduction, total deductions, and net salary.


How It Works

The program consists of several functions that perform specific calculations based on the user's inputs. Here's an overview of how each function works:

totalSalary(salary, period): This function calculates the total salary based on the given salary amount and period (monthly or annual). It returns the calculated total salary.

taxSalary(allowableOwnerOccupierInterest, grossSalary): This function calculates the taxable salary by subtracting the allowable owner-occupier interest and pension contribution from the gross salary. It

returns the taxable salary.

tax(): This function calculates the tax amount based on the taxable salary. It uses progressive tax rates to determine the tax amount and returns it.

disabilityExemption(totalTax, disabled): This function calculates the tax exemption for disabled individuals. It checks if the user has a disability exemption certificate and calculates the exemption based on 

the total tax amount. It returns the exempted tax amount.

relief(insuranceRelief, housingRelief, personalRelief): This function calculates the total tax relief by summing up the insurance relief, housing relief, and personal relief amounts. It returns the total relief 

amount.

nhif(grossSalary): This function calculates the NHIF deduction based on the gross salary. It uses predefined salary ranges and corresponding deduction amounts. It returns the NHIF deduction.

nssf(pensionablePay): This function calculates the NSSF deduction based on the pensionable pay. It uses predefined tiers and corresponding contribution rates. It returns the NSSF deduction.

The program calculates the total deductions by summing up the tax amount, NHIF deduction, and NSSF deduction. It then calculates the net salary by subtracting the total deductions from the sum of the taxable 

salary and total relief.
    
The program is free to use. Users are free to alter the code to their liking and preferences.






SPEED DETECTION

The Speed Detection program is a JavaScript function that determines the severity of a speeding violation based on the provided speed value. It calculates the number of demerit points for exceeding the speed 

limit and displays the appropriate message.


Usage

To use the Speed Detection function, follow these steps:

Open the program in a JavaScript environment or a web browser console.
    
Call the detectSpeed(speed) function and provide a value for the speed parameter.
    
Review the message displayed in the console, which indicates the severity of the speeding violation.


How It Works

The program consists of a single function, detectSpeed(speed), which performs the following steps:

Check if the provided speed is less than 70. If so, it prints "Ok" to indicate that the speed is within the acceptable limit.

If the speed is 70 or greater, calculate the number of demerit points by subtracting 70 from the speed and dividing the result by 5. This formula assumes that for every 5 units of speed exceeding 70,  one   

demerit point is assigned.

Check if the calculated demerit points exceed 12. If so, it prints "License suspended" to indicate that the driver's license is suspended due to excessive speeding.

If the demerit points are 12 or less, it prints the number of points using the message "Points {points}".
